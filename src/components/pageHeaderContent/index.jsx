import React from "react";
import "./style.scss";

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="page-header-wrapper">
      <h1 className="page-header-title">{headerText}</h1>
      {icon && <span className="page-header-icon">{icon}</span>}
    </div>
  );
};

export default PageHeaderContent;
