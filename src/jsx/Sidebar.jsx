import React from "react";
import "../css/Sidebar.css";
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faKey, faCogs, faCalculator } from "@fortawesome/free-solid-svg-icons";
import language from './language.jsx';

class Sidebar extends React.Component {
  state = {

    

  };

  redirectClick = (link) =>  {
    this.props.history.push("/"+ link);
  }

  render() {

    var pathName = this.props.location.pathname;

    return (
      <div>
        <div className="sidebar">
            <div className="icon-center">
            <a className={pathName === "/" ? "active sidebar-item title" : "sidebar-item" } title={language.getMenuTitle('home')} href="/"><FontAwesomeIcon icon={faHome} size="2x"/></a>
            <a className={pathName === "/reverse" ? "active sidebar-item" : "sidebar-item" } title={language.getMenuTitle('matrixReverse')} href="/reverse"><FontAwesomeIcon icon={faCalculator} size="2x" /></a>
            <a className={pathName === "/encrypt" ? "active sidebar-item" : "sidebar-item" } title={language.getMenuTitle('encrypt')} href="/encrypt"><FontAwesomeIcon icon={faCogs} size="2x"/></a>
            <a className={pathName === "/decrypt" ? "active sidebar-item" : "sidebar-item" } title={language.getMenuTitle('decrypt')} href="/decrypt"><FontAwesomeIcon icon={faKey} size="2x" /></a>
            <a className={pathName === "/about" ? "active sidebar-item" : "sidebar-item" } title={language.getMenuTitle('about')} href="/about"><FontAwesomeIcon icon={faInfoCircle} size="2x" /></a>
            </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Sidebar);