import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thumbnail from "./asset/thumbnail-news.png";
import thumbnail1 from "./asset/thumbnail1.png";
import thumbnail2 from "./asset/thumbnail2.png";
import thumbnail3 from "./asset/thumbnail3.png";
import thumbnail4 from "./asset/thumbnail4.png";
import "./newsStyle.css";

const RelatedNews = () => {
  const navigate = useNavigate();

  // Ketika sudah fetch
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/news")
  //     .then((res) => res.json())
  //     .then((news) => setNews(news))
  //     .catch((err) => console.error("Error fetching data:", err));
  // }, []);

  // const shortDescription = (text) => {
  //   const words = text.split(' ');
  //   const truncatedWords = words.slice(0, 10);
  //   const truncatedDescription = truncatedWords.join(' ');
  //   return truncatedDescription;
  // };

  {
    /* {news.map((d, index) => (
                    <Row key={index} className="mb-4">
                      <div className="miniNews">
                        <a
                          href="#"
                          className="flex w-full"
                          onClick={() => navigate("/news")}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={n.gambar}
                            style={{
                              height: "100px",
                              width: "auto",
                              borderRadius: "10px",
                            }}
                          />
                          <div className="flex p-2 leading-normal">
                            <h5 className="text-sm font-bold dark:text-black">
                              {n.deskripsi}
                            </h5>
                          </div>
                        </a>
                      </div>
                    </Row>
                  ))} */
  }

  return (
    <div className="container-colum">
      <div
        style={{
          width: "auto",
          height: "calc(100vh - 40px)",
          overflowY: "auto",
          justifyContent: "right",
          marginTop: "200px",
        }}
      >
        <Container>
          <div class="overflow-hidden">
            <div className="relatedNews">Related News</div>
            <Col className="ml-4">
              {data.map((d, index) => (
                <Row key={index} className="mb-4">
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={d.img}
                        style={{
                          height: "100px",
                          minWidth: "150px",
                          objectFit: "cover",
                          overflowY: "hidden",
                          borderRadius: "10px",
                        }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          {d.title}
                        </h5>
                      </div>
                    </a>
                  </div>
                </Row>
              ))}
            </Col>
          </div>
        </Container>
      </div>
      <div
        style={{
          width: "calc(20% - 10px)",
          height: "100vh",
          marginRight: "20px",
        }}
      ></div>
    </div>
  );
};

const data = [
  {
    title: "44 Tflyers Penerima Program Penghargaan",
    img: thumbnail1,
  },
  {
    title: "MTT Adakan Kegiatan Donor Darah",
    img: thumbnail2,
  },
  {
    title:
      "Memperingati Hari Bati Adyaksa, BUMN selenggarakan Seni Tari & Musik",
    img: thumbnail3,
  },
  {
    title: "Pemeringatan Hari Olahraga Nasional 2023",
    img: thumbnail4,
  },
];

export default RelatedNews;
