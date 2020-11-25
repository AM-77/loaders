import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 9,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .loader:after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    border: 32px solid #607d8b;
    border-color: #607d8b transparent #607d8b transparent;
    -webkit-animation: loader 1.2s infinite;
            animation: loader 1.2s infinite;
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    50% {
      -webkit-transform: rotate(900deg);
              transform: rotate(900deg);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    100% {
      -webkit-transform: rotate(1800deg);
              transform: rotate(1800deg);
    }

  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    50% {
      -webkit-transform: rotate(900deg);
              transform: rotate(900deg);
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    100% {
      -webkit-transform: rotate(1800deg);
              transform: rotate(1800deg);
    }

  }`,
  tags: ['other', 'circle', 'single-div'],
};

export default loader;
