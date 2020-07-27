import React, {useState} from "react";
import LastDivesCpnt from "../components/LastDivesCpnt";
import ButtonCpnt from "../components/BoutonCpnt";
import AddDivesCpnt from "../components/AddDiveCpnt";

const DivingBoard = () => {
  const [addIsVisible, setAddIsVisible] = useState(false);
  const handleAddDive = () => {
    setAddIsVisible(!addIsVisible);
  }
  return (
    <article className="divingBoard">
      <LastDivesCpnt />
      {addIsVisible ? <ButtonCpnt funcToClick={handleAddDive}>Fermer</ButtonCpnt> : <ButtonCpnt funcToClick={handleAddDive}>Ajouter une plongée</ButtonCpnt>}
      {addIsVisible && <AddDivesCpnt />}
    </article>
  );
};

export default DivingBoard;
