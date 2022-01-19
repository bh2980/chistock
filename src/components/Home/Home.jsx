import React from "react";
import "./style/index.scss";
import trending from "assets/icons/trending_up.svg";
import fire from "assets/icons/fire.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Home = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="home">
      <div className="chart-container shadow-box">
        <div className="title">
          <div className="image-container shadow-box">
            <img src={trending} alt="trending icon" />
          </div>
          <div className="texts">
            <div className="title-area">
              <span className="title-text">나스닥 종합</span>
            </div>
            <div className="price-area inc">
              <span className="current-price">15,000.001</span>
              <span className="price-delta">210.000 +5%</span>
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="buttons">
            <button className="shadow-box clicked">1분</button>
            <button className="shadow-box">5분</button>
            <button className="shadow-box">15분</button>
            <button className="shadow-box">30분</button>
            <button className="shadow-box">4시간</button>
            <button className="shadow-box">하루</button>
          </div>
          <Line
            data={{
              labels: [1, 2, 3],
              datasets: [
                {
                  label: "dataset 1",
                  data: [1, 2, 3],
                  borderColor: "rgb(255,99,132)",
                  backgroundColor: "rgba(255,99,132,0.5)",
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="line" />
      <div className="main-item">
        <div className="title shadow-box">
          <div className="image-container shadow-box">
            <img src={fire} alt="fire icon" />
          </div>
          <div className="title">
            <span className="title-text">주요 종목</span>
          </div>
        </div>
        <div className="stock-list shadow-box">
          <div className="stock shadow-box">
            <div className="rank shadow-box">1</div>
            <div className="item-code shadow-box">AAPL</div>
            <div className="price-container shadow-box">
              <div className="delta inc">+5%</div>
              <div className="price">$175.55</div>
            </div>
          </div>
          <div className="stock shadow-box">
            <div className="rank shadow-box">2</div>
            <div className="item-code shadow-box">LOREM</div>
            <div className="price-container shadow-box">
              <div className="delta desc">-5%</div>
              <div className="price">$175.55</div>
            </div>
          </div>
          <div className="stock shadow-box">
            <div className="rank shadow-box">3</div>
            <div className="item-code shadow-box">LOREM</div>
            <div className="price-container shadow-box">
              <div className="delta desc">-5%</div>
              <div className="price">$175.55</div>
            </div>
          </div>
          <div className="stock shadow-box">
            <div className="rank shadow-box">4</div>
            <div className="item-code shadow-box">LOREM</div>
            <div className="price-container shadow-box">
              <div className="delta desc">-5%</div>
              <div className="price">$175.55</div>
            </div>
          </div>
          <div className="stock shadow-box">
            <div className="rank shadow-box">5</div>
            <div className="item-code shadow-box">LOREM</div>
            <div className="price-container shadow-box">
              <div className="delta desc">-5%</div>
              <div className="price">$175.55</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
