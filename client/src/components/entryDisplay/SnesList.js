import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import snesData from "../../utils/snesData";

class SnesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listIsDisplayed: false
    };
    this.toggleList = this.toggleList.bind(this);
  }
  toggleList() {
    let toggleTo = !this.state.listIsDisplayed;
    this.setState({ listIsDisplayed: toggleTo });
  }
  render() {
    const episode = parseInt(this.props.title.split(" ")[1].split("")[1]);

    return (
      <div>
        {this.state.listIsDisplayed ? (
          <div>
            <button className="btn-snes" onClick={this.toggleList}>
              Hide List
            </button>
            <ol class="snes-rankings">
              {snesData
                .filter(game => {
                  return game.episode < episode;
                })
                .map((game, idx) => {
                  return <li key={idx}>{game.title}</li>;
                })}
            </ol>
          </div>
        ) : (
          <button className="btn-snes" onClick={this.toggleList}>
            Show List
          </button>
        )}
      </div>
    );
  }
}

SnesList.propTypes = {
  title: PropTypes.string
};

export default connect(null)(SnesList);
