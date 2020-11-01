import React from 'react';
import PropTypes from 'prop-types';

type props = {
  id: number;
  html: string;
};

const Loader: React.FC<props> = ({ id, html }) => {
  return (
    <div
      className={`loader loader-${id}`}
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

Loader.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.string.isRequired,
};

export default Loader;
