import React from 'react';

import './style/index';

export const Container = (props) => {
  return props.components ? (
    <div className="container c-flex">{props.components}</div>
  ) : (
    <div className="container">{props.component}</div>
  );
};
