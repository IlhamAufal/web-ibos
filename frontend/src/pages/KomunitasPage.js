import React from "react";
import BannerCommunity from "../KomunitasPage/bannerKomunitas";
import PendaftaranAnggota from "../KomunitasPage/PendaftaranAnggota";
import atlet from "../KomunitasPage/asset/Photo atlet jamaah.svg";
import { Container } from "react-bootstrap";

const CommunityPage = () => {
  return (
    <div>
      <BannerCommunity />

      {/* Komponen KEnapa Harus Gabung? */}
      <div
        style={{
          marginBlock: "50px",
          position: "relative",
          display: "flex",
          marginTop: "150px",
        }}
      >
        <Container>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "auto",
              paddingBottom: "0px",
              backgroundColor: "red",
              zIndex: "1",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: "white",
                textAlign: "justify",
                margin: "20px 0 40px 40%",
                width: "1000px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "35px" }}>
                Kenapa Harus Gabung?
              </div>
              <div style={{ fontSize: "12px", maxWidth: "80%" }}>
                Tflyers berkesempatan untuk bergabung dalam komunitas karyawan
                sesuai minat/hobinya dalam bidang kerohanian, seni dan budaya,
                olahraga, serta kepedulian sosial dan lingkungan. Ini sebagai
                upaya menyeimbangkan antara bekerja dan kehidupan pribadi
                (work-life balance). Dalam komunitas IBOS, Tflyers dapat
                mengembangkan jiwa kepemimpinan (cultural leader), bagaimana
                mengelola suatu organisasi, walaupun dalam skala kecil dengan
                tetap memperhatikan tata kelola yang baik. Selain itu kegiatan
                dalam komunitas IBOS bermanfaat pada kesehatan fisik dan mental,
                menjalin persahabatan, kebersamaan, kerja sama, sportivitas, dan
                aspek positif lainnya yang akan mendorong produktivitas dalam
                bekerja. Ayuk… bergabung dalam komunitas IBOS.
              </div>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: "2", right: "10%" }}>
            <img
              src={atlet}
              alt=""
              style={{ height: "400px", marginLeft: "5%" }}
            />
          </div>
        </Container>
      </div>

      <PendaftaranAnggota />

      {/* <Documentation /> */}
    </div>
  );
};

export default CommunityPage;
