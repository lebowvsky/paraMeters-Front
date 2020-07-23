import React, {useState} from "react";
import LastDivesCpnt from "../components/LastDivesCpnt";
import ButtonCpnt from "../components/BoutonCpnt";
import AddDivesCpnt from "../components/AddDiveCpnt";

const DivingBoard = () => {
  const [addIsVisible, setAddIsVisible] = useState(false);
  const handleAddDive = () => {
    setAddIsVisible(true);
  }
  return (
    <article className="divingBoard">
      <LastDivesCpnt />
      <ButtonCpnt funcToClick={handleAddDive}>Add a Dive</ButtonCpnt>
      {addIsVisible && <AddDivesCpnt />}
    </article>
  );
};

export default DivingBoard;
