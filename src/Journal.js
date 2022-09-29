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
            <label >Humeur:</label>
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
/** 
 * <ImageChange original={awakeImg} selected={sadImgSel} />
                <ImageChange original={medAwakeImg} selected={masoImgSel} />
                <ImageChange original={sleepImg} selected={happyImgSel} />
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