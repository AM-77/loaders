import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 1,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 80px;
    height: 80px;
    background: #880E4F;
    border-radius: 50%;
    -webkit-animation: animate 650ms cubic-bezier(0, 0.07, 0.51, 1) infinite;
            animation: animate 650ms cubic-bezier(0, 0.07, 0.51, 1) infinite
  }

  @-webkit-keyframes animate {
    0%{
      opacity: 0.9;
      -webkit-transform: scale(0.1);
              transform: scale(0.1);
    }

    100% {
      opacity: 0.1;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }

  @keyframes animate {
    0%{
      opacity: 0.9;
      -webkit-transform: scale(0.1);
              transform: scale(0.1);
    }

    100% {
      opacity: 0.1;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }`,
  tags: ['disc'],
};

export default loader;
