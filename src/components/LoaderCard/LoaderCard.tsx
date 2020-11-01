import React from 'react';
import PropTypes from 'prop-types';

import ILoader from '../../types/ILoader';
import Loader from '../Loader/Loader';

import './style.scss';

type props = {
  loader: ILoader;
  onClick: (id: number) => void;
};

const LoaderCard: React.FC<props> = ({
  loader: { id, html, tags },
  onClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(id)}
      onKeyDown={(e) => e.preventDefault()}
      className={`loader-card ${tags.join(' ')}`}
    >
      <Loader id={id} html={html} />
    </div>
  );
};

LoaderCard.propTypes = {
  loader: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    style: PropTypes.string.isRequired,
    credits: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoaderCard;
