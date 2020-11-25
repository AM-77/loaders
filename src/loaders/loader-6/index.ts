import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 6,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    border-top: 3px solid transparent;
    border-left: 3px solid #e91e63;
    -webkit-animation: animate-rotate 600ms linear infinite;
    animation: animate-rotate 600ms linear infinite;
  }

  @-webkit-keyframes animate-rotate {
    0% {
      -webkit-transform: rotateZ(0deg);
              transform: rotateZ(0deg)
    }

    100% {
      -webkit-transform: rotateZ(360deg);
              transform: rotateZ(360deg)
    }
  }

  @keyframes animate-rotate {
    0% {
      -webkit-transform: rotateZ(0deg);
              transform: rotateZ(0deg)
    }

    100% {
      -webkit-transform: rotateZ(360deg);
              transform: rotateZ(360deg)
    }
  }`,
  tags: ['circle', 'single-div'],
};

export default loader;
