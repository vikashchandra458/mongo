import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function FetchNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  });
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a
                      href={value.url}
                      target="blank"
                      className="btn btn-primary"
                    >
                      {value.source.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchNews;
