import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import InputCpnt from "./InputCpnt";
import SelectCpnt from "./SelectCpnt";
import SelectDiversCpnt from "./SelectDiversCpnt";
import ButtonCpnt from "./BoutonCpnt";

const arrProf = [0];
for (let i = 3; i <= 80; i++) {
  arrProf.push(i);
}

const ArrDuree = [0];
for (let i = 1; i <= 240; i++) {
  ArrDuree.push(i);
}

const Arrmelange = ["Air", "Nitrox", "Trimix"];

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const AddDivesCpnt = (props) => {
  const [dateDive, setDateDive] = useState();
  const [hourDive, setHourDive] = useState();
  const [localisation, setLocalisation] = useState();
  const [profondeur, setProfondeur] = useState();
  const [duree, setDuree] = useState();
  const [melange, setMelange] = useState();
  const [allDivers, setAllDivers] = useState();
  const [addDiver, setAddDiver] = useState();
  const [chosenDiversId, setChosenDiversId] = useState([]);
  const [chosenDiversDatas, setChosenDiversDatas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/divers").then((response) =>
      setAllDivers(
        response.data.filter((diver) => diver.id_diver != props.user.userId)
      )
    );
  }, []);

  useEffect(() => {
    const funcDiver = async () => {
      const datas = await Axios.get(
        `http://localhost:8080/api/divers/${
          chosenDiversId[chosenDiversId.length - 1]
        }`
      );
      setChosenDiversDatas([...chosenDiversDatas, datas.data[0]]);
    };
    chosenDiversId[0] && funcDiver();
  }, [chosenDiversId]);

  const handleDate = (e) => {
    setDateDive(e.target.value);
  };

  const handleHour = (e) => {
    setHourDive(e.target.value);
  };

  const handleProf = (e) => {
    setProfondeur(e.target.value);
  };

  const handleDuree = (e) => {
    setDuree(e.target.value);
  };

  const handleMelange = (e) => {
    setMelange(e.target.value);
  };

  const handleLocalisation = (e) => {
    setLocalisation(e.target.value);
  };

  const handleDiver = (e) => {
    setAddDiver(Number(e.target.value));
  };

  const handleClickAddDiver = () => {
    setChosenDiversId([...chosenDiversId, addDiver]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        "http://localhost:8080/api/diving",
        {
          date_diving: dateDive,
          deep: profondeur,
          duration: duree,
          gas: melange,
          localisation: localisation,
          hour_diving: hourDive,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      const recupDiving = await Axios.get(
        `http://localhost:8080/api/diving/recup/${localisation}/${dateDive}/${duree}/${profondeur}`
      );
      await Axios.post(
        `http://localhost:8080/api/belong-to`,
        {
          diver_id: props.user.userId,
          diving_id: recupDiving.data[0].id_diving,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      asyncForEach(chosenDiversDatas, async (elt) => {
        await Axios.post(
          `http://localhost:8080/api/belong-to`,
          {
            diver_id: elt.id_diver,
            diving_id: recupDiving.data[0].id_diving,
          },
          { headers: { "Content-Type": "application/json" } }
        );
      });
      toast.success("Plongée ajoutée avec succès", {});
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="addDive">
      <h2 className="titleArticle">ajouter</h2>
      <form onSubmit={handleSubmit} className="lastDivesBoard">
        <InputCpnt
          labelInput="Date"
          type="date"
          nameInput="dateDive"
          funcForInput={handleDate}
        />
        <InputCpnt
          labelInput="Heure"
          type="time"
          nameInput="hourDive"
          funcForInput={handleHour}
        />
        <div className="selects">
          <SelectCpnt
            ArrToMap={arrProf}
            nameSelect="prof"
            labelSelect="Profondeur"
            funcForSelect={handleProf}
          />
          <SelectCpnt
            ArrToMap={ArrDuree}
            nameSelect="duree"
            labelSelect="Durée"
            funcForSelect={handleDuree}
          />
          <SelectCpnt
            ArrToMap={Arrmelange}
            nameSelect="melange"
            labelSelect="Mélange"
            funcForSelect={handleMelange}
          />
        </div>

        <InputCpnt
          labelInput="Localisation"
          type="text"
          nameInput="localisationDive"
          funcForInput={handleLocalisation}
        />
        <div className="palanquee">
          <div className="choseDiver">
            {allDivers && (
              <SelectDiversCpnt
                ArrToMap={allDivers}
                nameSelect="plongeurs"
                labelSelect="Plongeurs"
                funcForSelect={handleDiver}
              />
            )}
            <ButtonCpnt type="button" funcToClick={handleClickAddDiver}>
              +
            </ButtonCpnt>
          </div>

          <div className="diversList">
            {chosenDiversDatas.map((diver) => {
              return <p>{`${diver.firstname} ${diver.lastname}`}</p>;
            })}
          </div>
        </div>
        <ButtonCpnt type="submit">Envoyer</ButtonCpnt>
      </form>
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AddDivesCpnt);
