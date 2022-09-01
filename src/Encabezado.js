import React from 'react';

import guarderia from './imgs/guarderia.jpg'
import "./Encabezado.css";
function Encabezado(){
    return(
        <div>
            <img className="logo" src={guarderia} alt=""/>
            <div className="info">
                <label>Bonjour;</label>
                <input className='nom' type="text" name="nom" defaultValue="Nom"/>
                <label>Date: {today}</label>
            </div>
        </div>
    );
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

export {Encabezado};