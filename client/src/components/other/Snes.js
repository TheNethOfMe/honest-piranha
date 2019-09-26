import React, { Component } from "react";
import snesData from "../../utils/snesData";

class Snes extends Component {
  render() {
    return (
      <div className="card display-entry">
        <div className="card-body">
          <h1 className="accent-text">SNEScapades Rankings</h1>
          <div className="hp-card">
            <ol className="snes-list">
              {snesData.map((game, idx) => {
                return <li key={idx}>{game.title}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Snes;
