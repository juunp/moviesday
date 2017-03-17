import React from 'react';

function Loader(props){
  if (!props.isVisible){
    return null;
  }
  return (
    <div className="loader"></div>
  );
}

export default Loader;
