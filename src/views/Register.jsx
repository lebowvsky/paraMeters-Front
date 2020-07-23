import React, { useState } from "react";
import Axios from "axios";

import ButtonCpnt from "../components/BoutonCpnt";

const ages = [0];
for (let i = 15; i <= 99; i++) {
  ages.push(i);
}

const poids = [0];
for (let i = 40; i <= 200; i++) {
  poids.push(i);
}

const tailles = [0];
for (let i = 120; i <= 220; i++) {
  tailles.push(i);
}

const Register = (props) => {
  const [firstname, setFirstname] = useState();
  const [Lastname, setLastname] = useState();
  const [age, setAge] = useState();
  const [poid, setPoid] = useState();
  const [taille, setTaille] = useState();
  const [emailUser, setEmailUser] = useState();
  const [passwordUser, setPasswordUser] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleAge = (e) => {
    setAge(Number(e.target.value));
  };

  const handlePoid = (e) => {
    setPoid(Number(e.target.value));
  };

  const handleTaille = (e) => {
    setTaille(Number(e.target.value));
  };

  const handleEmail = (e) => {
    setEmailUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordUser(e.target.value);
  };

  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !Lastname ||
      !age ||
      !poid ||
      !taille ||
      !emailUser ||
      !passwordUser
    ) {
      return setError("un des champs est manquant");
    }

    if (passwordUser !== passwordCheck) {
      return setError("Les mots de passes sont différents");
    }

    await Axios.post(
      "http://localhost:8080/api/divers",
      {
        lastname: Lastname,
        firstname: firstname,
        age: age,
        weight: poid,
        height: taille,
        email: emailUser,
        password: passwordUser,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    setTimeout(() => {
      props.history.push('/');
    }, 1500)
  };

  

  return (
    <div className="registerPage">
      <article>
        <h2 className="titleArticle">Sign-Up</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <p style={{ color: "red" }}>{error}</p>
          <div className="inputDiv">
            <label htmlFor="firstname">Prénom</label>
            <input
              onChange={handleFirstname}
              type="text"
              className="inputSignIn"
              placeholder="votre prénom..."
              required
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="login">Nom</label>
            <input
              onChange={handleLastname}
              type="text"
              className="inputSignIn"
              placeholder="votre nom..."
              required
            />
          </div>

          <div className="selects">
            <div className="inputSelect">
              <label htmlFor="age">Age</label>
              <select onChange={handleAge} name="age" id="age">
                {ages.map((elt) => {
                  return <option key={elt} value={elt}>{elt}</option>;
                })}
              </select>
            </div>
            <div className="inputSelect">
              <label htmlFor="poid">Poid</label>
              <select onChange={handlePoid} name="poid" id="poid">
                {poids.map((elt) => {
                  return <option key={elt} value={elt}>{elt}</option>;
                })}
              </select>
            </div>
            <div className="inputSelect">
              <label htmlFor="taille">Taille</label>
              <select onChange={handleTaille} name="taille" id="taille">
                {tailles.map((elt) => {
                  return <option key={elt} value={elt}>{elt}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmail}
              type="email"
              className="inputSignIn"
              placeholder="Votre email..."
              required
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="password">password</label>
            <input
              onChange={handlePassword}
              type="password"
              className="inputSignIn"
              placeholder="Votre mot de passe..."
              required
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="password">password</label>
            <input
              onChange={handlePasswordCheck}
              type="password"
              className="inputSignIn"
              placeholder="Vérification du mot de passe..."
              required
            />
          </div>
          <ButtonCpnt>Envoyer</ButtonCpnt>
        </form>
      </article>
    </div>
  );
};

export default Register;
