import React from "react";
import { useState } from "react";
import "./styles.css";

//sports{Nike Air Max Series, skechers Go Run series}
//lace up{Louis Philippe Black Formal Oxford,Mochi Tan Formal Derby}
//slip-on{Vans classic checkerboard slip-on sneakers,Merrell jungle moc sneakers}

const shoeDB = {
  Sports: [
    { series: "Nike Air Max Series" },
    { series: "Skechers Go Run Series" }
  ],
  LaceUps: [
    { series: "Louis Philippe Black Formal Oxford" },
    { series: "Mochi Tan Formal Derby" }
  ],
  SlipOn: [
    { series: "Vans classic checkerboard slip-on sneakers" },
    { series: "Merrell jungle moc sneakers" }
  ]
};

var para = "Hey Check Out My Favourite Shoes and U can pick one for you!";

export default function App() {
  const [selectedType, setType] = useState("Sports");
  function genreClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "white" }}>
        <span>👟</span> Build My Shoe! <span>👠</span>
      </h1>
      <h3 style={{ color: "#0066ff" }}>{para}</h3>
      <hr />
      <div>
        {Object.keys(shoeDB).map((type) => (
          <button
            onClick={() => genreClickHandler(type)}
            style={{
              cursor: "pointer",
              fontSize: "larger",
              background: "orange",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {shoeDB[selectedType].map((shoe) => (
            <li
              key={shoe.series}
              style={{
                listStyle: "none",
                color: "#001f4d",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {shoe.series} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
