import { React } from "react";
import { ImageChange } from "./ImageChange";

import sadImg from './imgs/sad.png';
import masoImg from './imgs/maso.png';
import happyImg from './imgs/happy.png';
//-------- Emotions Selected --------------//
import sadImgSel from './imgs/sad-select.png';
import masoImgSel from './imgs/maso-select.png';
import happyImgSel from './imgs/happy-select.png';
//--------------- Moon --------------------//
import awakeImg from './imgs/nosleep.png';
import medAwakeImg from './imgs/med-moon.png';
import sleepImg from './imgs/sleepy-moon.png';
//------------ Moon Selected -------------//
import awakeImgSel from './imgs/nosleep-moon.png';
import medAwakeImgSel from './imgs/med.png';
import sleepImgSel from './imgs/sleepy.png';
//---------------- CSS ---------------------//
import "./Journal.css"

function Journal() {
    return (
        <div className="Journal">
            <div className="">
                <label >Théme de la semaine</label>
                <div className="casilla_checkbox margin-top-15px">
                    <input type="checkbox" name="Langagier" value="Langagier" />
                    <label >Langagier</label>
                    <input type="checkbox" name="Cognitif" value="Cognitif" />
                    <label >Cognitif</label>
                    <input type="checkbox" name="Socio-affectif" value="Socio affectif" />
                    <label >Socio affectif</label>
                    <input type="checkbox" name="Moteur" value="Moteur" />
                    <label >Moteur</label>
                </div>
            </div>
            <div className="casilla">
                <label>Repas:</label>
                <textarea name="comments" id="" cols="5" rows="2"
                    placeholder="Collation"></textarea>

                <label>Dîner:</label>
                <textarea name="comments" id="" cols="5" rows="2"
                    placeholder="Dîner"></textarea>

            </div>
            <label>Humeur:</label>
            <div className="checkbox_imagen">
                <ImageChange original={sadImg} selected={sadImgSel} id="sad" />
                <ImageChange original={masoImg} selected={masoImgSel} id="maso" />
                <ImageChange original={happyImg} selected={happyImgSel} id="happy" />
            </div>

            <label>Sieste:</label>
            <div className="checkbox_imagen">
                <ImageChange className = "moon"
                    original={awakeImg} selected={awakeImgSel} id="awake" />
                <ImageChange className ="moon"
                    original={medAwakeImg} selected={medAwakeImgSel} id="medSleep" />
                <ImageChange className ="moon"
                    original={sleepImg} selected={sleepImgSel} id="sleep" />
            </div>
            <div className="casilla">
                <label>Commentaines:</label>
                <textarea name="comments" id="" cols="10" rows="5"
                    placeholder="Commentaines ecri"></textarea>
            </div>

        </div>

    );
}

export { Journal };