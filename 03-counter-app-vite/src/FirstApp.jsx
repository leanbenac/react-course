import React from "react";
import PropTypes from 'prop-types'


export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
      <h1>{ title }</h1>
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