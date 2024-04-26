import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thumbnail from "../NewsPage/asset/thumbnail-news.png";
import "../NewsPage/newspage.css";

const RelatedNews = () => {
  return (
    <div className="myBG">
      <div className="container-column">
        <div style={{ display: "flex", marginTop: "170px" }}>
          <div
            style={{
              width: "auto",
              height: "calc(100vh - 40px)",
              overflowY: "auto",
              justifyContent: "right",
            }}
          >
            <Container>
              <div class="overflow-hidden">
                <div className="relatedNews">Related News</div>
                <Container>
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={thumbnail}
                        style={{ blockSize: "100px", borderRadius: "10px" }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </a>
                  </div>
                </Container>
                <Container>
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={thumbnail}
                        style={{ blockSize: "100px", borderRadius: "10px" }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </a>
                  </div>
                </Container>
                <Container>
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={thumbnail}
                        style={{ blockSize: "100px", borderRadius: "10px" }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </a>
                  </div>
                </Container>
                <Container>
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={thumbnail}
                        style={{ blockSize: "100px", borderRadius: "10px" }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </a>
                  </div>
                </Container>
                <Container>
                  <div className="miniNews">
                    <a
                      href="#"
                      className="flex w-full"
                      onClick={() => navigate("/news")}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={thumbnail}
                        style={{ blockSize: "100px", borderRadius: "10px" }}
                      />
                      <div className="flex p-2 leading-normal">
                        <h5 className="text-sm font-bold dark:text-black">
                          Noteworthy technology acquisitions 2021
                        </h5>
                      </div>
                    </a>
                  </div>
                </Container>
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
      </div>
    </div>
  );
};

export default RelatedNews;
