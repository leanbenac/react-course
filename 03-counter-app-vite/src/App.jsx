import React from "react";
import PropTypes from 'prop-types'


const App = ({ title, subTitle, name }) => {



  return (
    <>
      <h2>{ title }</h2>
      <p>{ subTitle }</p>
      <p>{  name }</p>
    </>
  );
};


export default App;

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

App.defaultProps = {
    name: 'Leandro Benac',
    subTitle: 19239,
    title: 'Benac',
}