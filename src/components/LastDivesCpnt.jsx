import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";

const dives = [
  {
    nmbr: 1,
    prof: "25m",
    localisation: "Tahiti",
    duree: 61,
  },
  {
    nmbr: 2,
    prof: "24m",
    localisation: "Cherbourg",
    duree: 34,
  },
  {
    nmbr: 3,
    prof: "35m",
    localisation: "Tahiti",
    duree: 28,
  },
  {
    nmbr: 4,
    prof: "18m",
    localisation: "La Réunion",
    duree: 75,
  },
];

const LastDivesCpnt = (props) => {
  const [allDives, setAllDives] = useState([]);

  useEffect(() => {
    const getDives = async () => {
      const divesDatas = await Axios.get(`http://localhost:8080/api/divers/${props.user.userId}/dives`);
      setAllDives(divesDatas.data);
    };
    getDives();
  }, []);

  return (
    <section className="lastDives">
      <h2 className="titleArticle">10 dernières plongées</h2>
      <div className="lastDivesBoard">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lieu</th>
              <th>Heure</th>
              <th>Durée (mn)</th>
              <th>Prof (m)</th>
              <th>Mélange</th>
            </tr>
          </thead>
          <tbody>
            {
              allDives.map(elt => {
                return (
                  <tr>
                    <td>{elt.date}</td>
                    <td>{elt.localisation}</td>
                    <td>{elt.hour_diving}</td>
                    <td>{elt.duration}</td>
                    <td>{elt.deep}</td>
                    <td>{elt.gas}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LastDivesCpnt);
