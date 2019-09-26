import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getMenu } from "../../actions/menuActions";
import Spinner from "../common/Spinner";

class MenuWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    };
  }
  componentDidMount() {
    this.props.getMenu();
  }
  render() {
    const { menuItems, menuLoading } = this.props.menu;
    let displayMenu;
    if (!menuItems || menuLoading) {
      displayMenu = <Spinner />;
    } else {
      displayMenu = menuItems.map(menu => {
        return (
          <Link to={menu.url}>
            <p
              className={
                menu.menuType === "main"
                  ? "widget-items_primary"
                  : "widget-item_secondary"
              }
            >
              {menu.displayText}
            </p>
          </Link>
        );
      });
    }
    return (
      <div className="entry-item_widget mb-2">
        <div className="card-body text-left widget-items">{displayMenu}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

MenuWidget.propTypes = {
  menu: PropTypes.object.isRequired,
  getMenu: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getMenu }
)(MenuWidget);

/*
<div className="card-body text-left widget-items">
          <Link to="/type/video">
            <p className="widget-items_primary">Videos</p>
          </Link>
          <Link to="/series/Summer StarTropics">
            <p className="widget-item_secondary">Summer StarTropics</p>
          </Link>
          <Link to="/series/Other Videos">
            <p className="widget-item_secondary">Other Videos</p>
          </Link>

          <Link to="/type/podcast">
            <p className="widget-items_primary">Podcasts</p>
          </Link>
          <Link to="/series/SNEScapades">
            <p className="widget-item_secondary">SNEScapades</p>
          </Link>

          <Link to="/snes">
            <p className="widget-items_primary">SNES Rankings</p>
          </Link>
          <p className="widget-items_primary">More Info</p>
        </div>
        */
