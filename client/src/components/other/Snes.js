import React, { Component } from "react";
import snesList from "../../utils/snesList";

class Snes extends Component {
  render() {
    console.log(snesList);
    return (
      <div className="card display-entry">
        <div className="card-body">
          <h1 className="accent-text">SNEScapades Rankings</h1>
          <div className="hp-card">
            <ol className="snes-list">
              {snesList.map((game, idx) => {
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
