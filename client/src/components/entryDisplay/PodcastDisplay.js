import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SnesList from "./SnesList";

class PodcastDisplay extends Component {
  render() {
    const podcastSrc = `https://anchor.fm/honest-piranha/embed/episodes/${this.props.pcid}`;
    return (
      <div className="podcast-wrapper">
        <iframe
          width="400px"
          height="102px"
          src={podcastSrc}
          frameBorder="0"
          title={this.props.title}
          scrolling="no"
        />
        <SnesList title={this.props.title} />
      </div>
    );
  }
}

PodcastDisplay.propTypes = {
  pcid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default connect(null)(PodcastDisplay);
