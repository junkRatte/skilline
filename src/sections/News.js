import React from "react";
import NewsImageOne from "../images/news-image-one.png";
import NewsImageTwo from "../images/news-image-two.png";
import NewsImageThree from "../images/news-image-three.png";
import NewsImageFour from "../images/news-image-four.png";

function News() {
  return (
    <div className="news-section">
      <div className="news-section-title">
        <h2>Latest News and Resources</h2>
        <p>See the developments that have occured to Skillines in the world</p>
      </div>
      <div className="news-section-articles">
        <div className="articles-left">
          <article>
            <img src={NewsImageOne} />
            <p className="tag">News</p>
            <h3>
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <p className="summary">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a href="#">Read more</a>
          </article>
        </div>
        <div className="articles-right">
          <article>
            <div className="article-image">
              <img src={NewsImageTwo} />
              <p className="tag">Press release</p>
            </div>
            <div className="article-text">
              <h3>
                Class Technologies Inc. Closes $30 million Series A Financing To
                Meet High Demand
              </h3>
              <p>Class Technologies Inc., the company that created Class...</p>
            </div>
          </article>
          <article>
            <div className="article-image">
              <img src={NewsImageThree} />
              <p className="tag">News</p>
            </div>
            <div className="article-text">
              <h3>
                Zoom’s earliest investors are betting millions on a better Zoom
                for schools
              </h3>
              <p>
                Zoom was never created to be a consumer product. Nonetheless,
                the...
              </p>
            </div>
          </article>
          <article>
            <div className="article-image">
              <img src={NewsImageFour} />
              <p className="tag">News</p>
            </div>
            <div className="article-text">
              <h3>
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom
                Classrooms
              </h3>
              <p>
                This year, investors have reaped big financial returns from
                betting on Zoom...
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default News;
