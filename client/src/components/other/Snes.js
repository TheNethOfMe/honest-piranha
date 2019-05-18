import React, { Component } from "react";

class Snes extends Component {
  render() {
    return (
      <div className="card display-entry">
        <div className="card-body">
          <h1 className="accent-text">SNEScapades Rankings</h1>
          <div className="hp-card">
            <ol className="snes-list">
              <li>Super Mario World</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Snes;
