import { useEffect, useState } from "react";
import thumbnail from "./asset/thumbnail-news.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
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

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {/* {news.map((n, index) => (
          <Col
            key={index}
            md={5}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
            <div className="myNews">
              <a
                href="#"
                className="flex w-full"
                onClick={() => navigate("/news")}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="object-cover rounded-lg"
                  src={ thumbnail || n.gambar}
                  style={{
                    height: "120px",
                    width: "minmax(250px, 300px)",
                    marginLeft: "20px",
                    marginTop: "13px",
                  }}
                  alt={n.judul}
                />
                <div className="flex flex-col p-4 leading-normal">
                  <h6 className="font-bold text-black-900 dark:text-black">
                    {n.judul}
                  </h6>
                  <p className="font-normal text-sm text-gray-700 text-justify">
                    {shortDescription(n.deskripsi)}
                  </p>
                </div>
              </a>
            </div>
          </Col>
        ))} */}

        {/* Ini yang sebelumnya */}
        {data.map((d, index) => (
          <Col
            key={index}
            md={5}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="myNews-overlay" style={{ marginTop: "25px" }}></div>
            <div className="myNews">
              <a
                href="#"
                className="flex w-full"
                onClick={() => navigate("/news")}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="object-cover rounded-lg"
                  src={d.img}
                  style={{
                    height: "120px",
                    width: "300px",
                    marginLeft: "20px",
                    marginTop: "13px",
                    overflowY: "hidden",
                  }}
                  alt={d.title}
                />
                <div className="flex flex-col p-4 leading-normal">
                  <h6 className="font-bold text-black-900 dark:text-black">
                    {d.title}
                  </h6>
                  <p className="font-normal text-sm text-gray-700 text-justify">
                    {d.description}
                  </p>
                </div>
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const data = [
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    title: "Noteworthy technology acquisitions 2021",
    img: thumbnail,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

export default BlogCard;
