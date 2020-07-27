import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


import {
  changeFirstname,
  changeLastname,
  changeEmail,
  changeUserId,
} from "../actions/userActions";

import ButtonCpnt from "../components/BoutonCpnt";

const Home = (props) => {
  const { changeFirstname, changeLastname, changeEmail, changeUserId } = props;

  const [userLogin, setUserLogin] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    changeFirstname();
    changeLastname();
    changeEmail();
    changeUserId();
  }, [changeFirstname, changeLastname,changeEmail, changeUserId]);

  const handleLogin = (e) => {
    setUserLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        "http://localhost:8080/api/divers/login",
        { email: userLogin, password: password },
        { headers: { "Content-Type": "application/json" } }
      )
      const userDatas = await Axios.get(
        `http://localhost:8080/api/divers/redux/${userLogin}`
      );
      changeFirstname(userDatas.data[0].firstname);
      changeLastname(userDatas.data[0].lastname);
      changeEmail(userDatas.data[0].email);
      changeUserId(userDatas.data[0].id_diver);
      setTimeout(() => {
        props.history.push("/dive-board");
      }, 1500);
      toast.success(
        `${userDatas.data[0].firstname} a été loggé avec succès !`,
        {}
      );
    } catch (error) {
      toast.error("Erreur de Login ou de Mot de passe", {});
    }
  };

  return (
    <div className="homePage">
      <article className="homeboard">
        <h2 className="titleArticle">Sign-In</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="inputDiv">
            <label htmlFor="login">Login</label>
            <input
              type="email"
              onChange={handleLogin}
              className="inputSignIn"
              placeholder="Your login..."
              required
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="password">password</label>
            <input
              type="password"
              onChange={handlePassword}
              className="inputSignIn"
              placeholder="Your password..."
              required
            />
          </div>
          <ButtonCpnt type="submit">Envoyer</ButtonCpnt>
        </form>
        <Link to="/register">
          <p className="linkToCreate">Créer un compte</p>
        </Link>
      </article>
      <ToastContainer
        position="bottom-center"
        autoClose={1300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstname: (firstname) => {
      dispatch(changeFirstname(firstname));
    },
    changeLastname: (lastname) => {
      dispatch(changeLastname(lastname));
    },
    changeEmail: (email) => {
      dispatch(changeEmail(email));
    },
    changeUserId: (userId) => {
      dispatch(changeUserId(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
