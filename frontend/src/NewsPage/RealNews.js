import React from "react";
import { Container } from "react-bootstrap";
import "./newsStyle.css";
import newsimg from "./asset/thumbnail-news.png";
import pfp from "./asset/pfp.svg";
import iconFB from "../asset/icon-facebook.png";
import iconIG from "../asset/icon-instagram.png";

const RealNews = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
        marginBottom: "10px",
        marginLeft: "80px",
      }}
    >
      <Container>
        <h4>
          <b>Kolaborasi Membawa Prestasi: Peraihan Juara Runner Up</b>
        </h4>
        <p className="myNewsCategory">Olahraga</p>
        <div
          style={{
            marginBottom: "5px",
            maxWidth: "1000px",
            fontSize: "16px",
            textAlign: "justify",
          }}
        >
          <img src={newsimg} />
          <p
            style={{
              maxWidth: "920px",
              marginTop: "10px",
              marginBottom: "100px",
            }}
          >
            <b>JAKARTA - </b>Rabu, 30 Juli 2023
            <br />
            Kementerian BUMN menyelenggarakan BUMN Fest 2023 yang berlangsung
            dari tanggal 17-30 Juli 2023 di Jakarta. Perhelatan tahunan ini
            merupakan ajang perlombaan seni, budaya, dan olahraga yang ikuti 12
            klaster BUMN dengan 2.850 peserta, yaitu Sepak Bola 420 orang ,Tenis
            Lapangan 216 orang, Bulutangkis Putra 285 orang, Bulutangkis Putri
            105 orang, Bola Voli Putra 170 orang, Bola Voli Putri 51 orang, Bola
            Basket Putra 270 orang, Bola Basket Putri 90 orang, Tenis Meja Putra
            160 orang, Tenis Meja Putri 60 orang, Zumba 100 orang, e-Eport ML
            171 orang, E-sport PUBG 104 orang, Bakiak 72 orang, Gobak Sodor 72
            orang, Band 189 orang, Paduan Suara 240 orang, dan Berbalas Pantun
            75 orang, serta 359 orang official.
            <br />
            <b>Tim Telkomsel </b>
            menyertakan 31 peserta (Sepak Bola 5 orang, Bulutangkis 6 orang,
            Bola Basket 3 orang, Tenis Meja 2 orang, e-Sport 5 orang, Band 6
            orang, Paduan Suara 4 orang) dan 4 orang official. Mereka tergabung
            dalam tim Telkom Group yang termasuk dalam kontingen klaster
            Telekomunikasi dan Media. Pada BUMN Fest 2023 ini juara umum
            ditempati oleh klaster Jasa Keuangan dan sebagai runner-up adalah
            klaster Telekomunikasi dan Media.
          </p>
        </div>
        <h6>
          <b>Author:</b>
        </h6>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <img
              src={pfp}
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h5>
              <b>Guy hawkins</b>
            </h5>
            <p>Distribution Maintenance Server</p>
          </div>
          <div style={{ marginLeft: "auto", marginBottom: "10px" }}>
            <h5>Share:</h5>
            <div className="d-flex">
              {icons.map((i, index) => (
                <a href="/" key={index}>
                  <img
                    src={i.icon}
                    style={{
                      borderRadius: "50%",
                      height: "auto",
                      width: "80%",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const icons = [{ icon: iconFB }, { icon: iconIG }];

export default RealNews;
