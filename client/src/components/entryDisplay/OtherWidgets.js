import React, { Component } from "react";

export default class OtherWidgets extends Component {
  render() {
    return (
      <div className="card card-body other-widgets">
        <h5>Support Us</h5>
        <p>
          If you like what we do, please consider supporting us on the following
          platforms.
        </p>
        <ul className="platform-links">
          <li>Comming soon</li>
        </ul>
        <h5>Like Us</h5>
        <p>
          Be sure to{" "}
          <span>like our podcast and leave us a positive review</span> on
          whichever podcast app you listen where available! It really helps us
          out.
        </p>
        <h5>Connect</h5>
        <p>
          We're on Twitter for some reason. <span>@SNEScapdes</span>
        </p>
        <h5>Hire SteampunkLink</h5>
        <p>
          SNEScapades is co-hosted, produced, and edited by SteampunkLink. He
          also built this website. If you think he's got skills your company
          could use, drop him a line at that Twitter handle above.
        </p>
      </div>
    );
  }
}
