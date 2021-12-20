import React from "react";
import PropTypes from "prop-types";


const AutoDetect = (props) => {
  return (
    <div >
      <span onClick={ props.onClick } >
       Current location
      </span>
    </div>
  );
};
AutoDetect.propTypes = {
  onClick: PropTypes.func
};
AutoDetect.defaultProps = {
  onClick: null
};
export default AutoDetect;