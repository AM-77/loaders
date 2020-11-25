import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 10,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    border: 3px solid #ffc107;
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
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
