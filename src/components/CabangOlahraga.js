import React from "react";  
import '../style/olahragapage.css'
import Aerobik from "../asset/iconCabang/Aerobik.svg"
import Badminton from "../asset/iconCabang/Badminton.svg"
import Basket from "../asset/iconCabang/Basket.svg"
import Beladiri from "../asset/iconCabang/Beladiri.svg"
import Catur from "../asset/iconCabang/Catur.svg"
import Gym from "../asset/iconCabang/Gym.svg"
import Lari from "../asset/iconCabang/Lari.svg"
import Panahan from "../asset/iconCabang/Panahan.svg"
import Sepakbola from "../asset/iconCabang/Sepakbola.svg"
import TenisMeja from "../asset/iconCabang/Tenis table.svg"
import Tennis from "../asset/iconCabang/Tennis.svg"
import Volley from "../asset/iconCabang/Volley.svg"
import Yoga from "../asset/iconCabang/Yoga.svg"

// const svgs = {
//     Aerobik: require("../asset/banner1.svg"),
//     Badminton: require("../asset/banner2.svg"),
//     Basket: require("../asset/banner3.svg"),
//   };

const CabangOlahraga = () =>{
    return(
        <div
        className="font-bold"
        style={{ textAlign: "center", fontSize: "24px", marginBottom:'30px'}}>
        Cabang Olahraga
        <div className="mt-5 justify-center">
            <button style={{marginInline:'10px'}}>
                <img src={Aerobik} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Badminton} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Basket} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Beladiri} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Catur} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Gym} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Lari} className="iconCabang"/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Panahan} style={{height:'80px'}}/>
            </button>
        </div>
        <div className="mt-4 justify-center">
            <button style={{marginInline:'10px'}}>
                <img src={Sepakbola} style={{height:'80px'}}/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Sepakbola} style={{height:'80px'}}/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={TenisMeja} style={{height:'80px'}}/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Tennis} style={{height:'80px'}}/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Volley} style={{height:'80px'}}/>
            </button>
            <button style={{marginInline:'10px'}}>
                <img src={Yoga} style={{height:'80px'}}/>
            </button>
        </div>
      </div>
    )
}

export default CabangOlahraga;