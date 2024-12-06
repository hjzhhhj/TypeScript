import React, { useState } from "react";

const RankingApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState("단어 랭킹");

  const tabs = ["단어 랭킹", "짧은 글 랭킹", "긴 글 랭킹", "전체 랭킹"];
  const rankingData = [
    { rank: 1, value: "1" },
    { rank: 2, value: "2" },
    { rank: 3, value: "3" },
    { rank: 4, value: "4" },
    { rank: 5, value: "5" },
    { rank: 6, value: "6" },
    { rank: 7, value: "7" },
    { rank: 8, value: "8" },
    { rank: 9, value: "9" },
    { rank: 10, value: "10" },
  ];

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
            font-family: Arial, sans-serif;
          }

          .ranking-app {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .tabs {
            display: flex;
            width: 100%;
            background-color: #BEE7B0;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
          }

          .tab-button {
            flex: 1;
            padding: 15px;
            border: none;
            background: #BEE7B0;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            border-right: 1px solid white;
          }

          .tab-button:last-child {
            border-right: none; 
          }

          .tab-button.active {
            background: #277021;
            color: white;
            font-weight: bold;
          }

          .ranking-list {
            margin-top: 50px;
            width: 80%;
            max-width: 600px;
            border: 1px solid #a8d5a8;
            border-radius: 0 0 8px 8px;
            padding: 20px;
            background: #D4e2cF;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .ranking-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .ranking-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            background: #f9f9f9;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
          }

          .trophy {
            margin-right: 8px;
          }

          .gold {
            color: gold;
          }

          .silver {
            color: silver;
          }

          .bronze {
            color: #cd7f32;
          }

          .back-button {
            margin-top: 20px;
            padding: 10px 20px;
            background: #a8d5a8;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
        `}
      </style>
      <div className="ranking-app">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="ranking-list">
          <h2>{activeTab}</h2>
          <div className="ranking-items">
            {rankingData.map((item) => (
              <div key={item.rank} className="ranking-item">
                {item.rank === 1 && <span className="trophy gold">🏆</span>}
                {item.rank === 2 && <span className="trophy silver">🥈</span>}
                {item.rank === 3 && <span className="trophy bronze">🥉</span>}
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="back-button">돌아가기</button>
      </div>
    </>
  );
};

export default RankingApp;
