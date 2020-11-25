import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 0,
  html: `<> ... </>`,
  style: `.loader { ... }`,
  tags: ['dot', 'circle', 'disc', 'bar', 'single-div', 'other'],
  credits: {
    name: '...',
    link: 'https://...',
  },
};

export default loader;
