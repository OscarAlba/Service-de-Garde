import { React } from "react";
import "./Receipt.css";

function Receipt() {
  return (
    <section>
      <div className="header">
        <div>
          <h5>ENTRETIEN MÉNAGER</h5>
          <h5>EDNA TRUJILLO</h5>
        </div>
        <div>
          <p>Receipts</p>
          <p>No. 0000002</p>
        </div>
      </div>
      <div className="blue-header">
        <div className="space-between">
          <p className="padding-right">REÇU DE: </p>
          <p>Entretien Ménage Emmanuel</p>
        </div>
        <div className="space-between">
          <p className="padding-right">DATE:</p>
          <p>{today}</p>
        </div>
      </div>
      <br />
      <div className="content">
        <div className="flex">
          <p>MONTANT DÉCAISSÉ:</p>
          <input type="number" name="dollar" className="width-40px" /> CAD
        </div>
        <hr />
        <div className="flex">
          <p>EXPÉDIÉ À:</p>
          <input type="text" name="expide" className="width-180px" />
        </div>
        <hr />
        <div className="flex">
          <p>PURPOSE:</p>
          <select>
            <option value="">--Please choose an option--</option>
            <option value="25">25 dollars l’heure sans les produits </option>
            <option value="30">30 dollars l’heure avec les produits</option>
          </select>
        </div>
      </div>
    </section>
  );
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

export { Receipt };
