import React from "react";
import PropTypes from 'prop-types'


export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
      <h2>{ title }</h2>
      <p>{ subTitle }</p>
      <p>{  name }</p>
    </>
  );
};




FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    name: 'Leandro Benac',
    subTitle: 19239,
    // title: 'Benac',
}