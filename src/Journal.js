import { React } from "react";
//------------- Emotions ------------------//
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


let imgsSelected = { sad: false, maso: false, happy: false };
let moonSelected = { awake: false, med: false, sleep: false };

const sleep = document.querySelector("#sleep");
const medSleep = document.querySelector("#medSleep");
const awake = document.querySelector("#awake");

const happy = document.querySelector("#happy");
const maso = document.querySelector("#maso");
const sad = document.querySelector("#sad");

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
                <textarea name="comments" id="" cols="10" rows="5"
                    placeholder="Collation"></textarea>

                <label>Dîner:</label>
                <textarea name="comments" id="" cols="10" rows="5"
                    placeholder="Dîner"></textarea>

            </div>
            <label >Humeur:</label>
            <div className="checkbox_imagen">
                <img id="sad" src={sadImg} alt="" />
                <img id="maso" src={masoImg} alt="" />
                <img id="happy" src={happyImg} alt="" />
            </div>

            <label>Sieste:</label>
            <div className="checkbox_imagen">
                <img id="awake" className="moon" src={awakeImg} alt="" />
                <img id="medSleep" className="moon" src={medAwakeImg} alt="" />
                <img id="sleep" className="moon" src={sleepImg} alt="" />
            </div>
            <div className="casilla">
                <label>Commentaines:</label>
                <textarea name="comments" id="" cols="10" rows="5"
                    placeholder="Commentaines ecri"></textarea>
            </div>

        </div>

    );
}
/** 
//Imgs
happy.addEventListener("click", function () {

    if (imgsSelected.maso) {
        maso.click();
    } else if (imgsSelected.sad) {
        sad.click();
    }

    if (imgsSelected.happy) {
        happy.setAttribute("src", "./img/happy.png");
        imgsSelected.happy = false;
    } else {
        happy.setAttribute("src", "./img/happy-select.png");
        imgsSelected.happy = true;
    }
});

maso.addEventListener("click", function () {
    if (imgsSelected.happy) {
        happy.click();
    } else if (imgsSelected.sad) {
        sad.click();
    }

    if (imgsSelected.maso) {
        maso.setAttribute("src", "./img/maso.png");
        imgsSelected.maso = false;
    } else {
        maso.setAttribute("src", "./img/maso-select.png");
        imgsSelected.maso = true;
    }
});

sad.addEventListener("click", function () {

    if (imgsSelected.happy) {
        happy.click();
    } else if (imgsSelected.maso) {
        maso.click();
    }

    if (imgsSelected.sad) {
        sad.setAttribute("src", "./img/sad.png");
        imgsSelected.sad = false;
    } else {
        sad.setAttribute("src", "./img/sad-select.png");
        imgsSelected.sad = true;
    }
});


//Imgs Moons
sleep.addEventListener("click", function () {

    if (moonSelected.med) {
        medSleep.click();
    } else if (moonSelected.awake) {
        awake.click();
    }

    if (moonSelected.sleep) {
        sleep.setAttribute("src", "./img/sleepy-moon.png");
        moonSelected.sleep = false;
    } else {
        sleep.setAttribute("src", "./img/sleepy.png");
        moonSelected.sleep = true;
    }
});

medSleep.addEventListener("click", function () {
    if (moonSelected.sleep) {
        sleep.click();
    } else if (moonSelected.awake) {
        awake.click();
    }

    if (moonSelected.med) {
        medSleep.setAttribute("src", "./img/med-moon.png");
        moonSelected.med = false;
    } else {
        medSleep.setAttribute("src", "./img/med.png");
        moonSelected.med = true;
    }
});

awake.addEventListener("click", function () {

    if (moonSelected.sleep) {
        sleep.click();
    } else if (moonSelected.med) {
        medSleep.click();
    }

    if (moonSelected.awake) {
        awake.setAttribute("src", "./img/nosleep.png");
        moonSelected.awake = false;
    } else {
        awake.setAttribute("src", "./img/nosleep-moon.png");
        moonSelected.awake = true;
    }
});
**/



export { Journal };