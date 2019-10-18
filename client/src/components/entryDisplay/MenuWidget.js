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
          <Link to={menu.url} key={menu.order}>
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
