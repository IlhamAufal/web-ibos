import React from "react";
import BannerCommunity from "../KomunitasPage/bannerCommunity";
import PendaftaranKomunitas from "../KomunitasPage/PendaftaranKomunitas";
import atlet from "../KomunitasPage/asset/Photo atlet jamaah.svg";
import { Container } from "react-bootstrap";

const CommunityPage = () => {
  return (
    <div>
      <BannerCommunity />
      {/* Komponen Kenapa Harus Gabung? */}
      <div
        style={{ marginBlock: "50px", position: "relative", display: "flex" }}
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
                Lorem ipsum dolor sit amet consectetur. Curabitur sit enim in
                vulputate faucibus suspendisse sit. Vulputate eros nulla rutrum
                felis quam. Nulla elit elit ut ut eros ac velit. Et consequat
                massa adipiscing dignissim odio. Auctor etiam sed in aliquet
                eleifend arcu. Ut ultrices ac enim mattis lorem. Lorem et diam
                nulla est. In lorem pretium urna nibh condimentum aliquam. Enim
                turpis at sodales leo eget commodo sem volutpat. Malesuada
                mauris accumsan sed convallis sed facilisis. Euismod dignissim
                ut tincidunt lobortis vitae nunc pulvinar. Scelerisque lacus
                eget egestas est magna fermentum velit senectus sed. Non ornare
                lectus sollicitudin lorem tortor. Suspendisse urna molestie
                dolor sit id. Mauris diam risus dictumst tortor. Sed scelerisque
                sapien faucibus ut risus enim nam id. Feugiat ut nibh tellus
                congue eget. A a sit pretium sed sit blandit blandit feugiat
                eget. Risus senectus tellus auctor ante tempor scelerisque diam
                tellus pulvinar.
              </div>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: "2", right: "10%" }}>
            <img
              src={atlet}
              alt="Atlet"
              style={{ height: "400px", marginLeft: "5%" }}
            />
          </div>
        </Container>
      </div>
      <PendaftaranKomunitas />
      {/* <Documentation /> */}
    </div>
  );
};

export default CommunityPage;
