import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoaderCard from '../../components/LoaderCard/LoaderCard';
import Modal from '../../components/Modal/Modal';
import ILoader from '../../types/ILoader';

import './style.scss';

type props = {
  loaders: ILoader[];
};

const Loaders: React.FC<props> = ({ loaders }) => {
  const [selectedLoader, setSelectedLoader] = useState<ILoader>();

  const onLoaderClick = (id: number) => {
    setSelectedLoader(loaders[id]);
  };

  return (
    <div className="loaders-container">
      <h1 className="title">Pure CSS Loaders</h1>
      <p className="desc">
        A collection of open source, animated, simple and easy to use CSS
        loaders.
      </p>
      <div className="laoders">
        {loaders.map((loader) => (
          <LoaderCard onClick={onLoaderClick} loader={loader} key={loader.id} />
        ))}
      </div>

      {selectedLoader && (
        <Modal loader={selectedLoader} selectLoader={setSelectedLoader} />
      )}
    </div>
  );
};

Loaders.propTypes = {
  loaders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      html: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      style: PropTypes.string.isRequired,
      credits: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
      }),
    }).isRequired
  ).isRequired,
};

export default Loaders;
