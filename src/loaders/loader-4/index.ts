import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 4,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 50px;
    height: 50px;
    background: #00968850;
    border-radius: 50%;
    position: relative;
    -webkit-animation: animate-rotate 800ms cubic-bezier(0.32, 0.02, 0.58, 1) infinite;
            animation: animate-rotate 800ms cubic-bezier(0.32, 0.02, 0.58, 1) infinite;
  }

  .loader::before,
  .loader::after {
    display: block;
    position: absolute;
    top: -7px;
    left: -7px;
    content: '';
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 3px solid transparent;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .loader::before {
    border-left: 3px solid #009688;
  }

  .loader::after {
    border-right: 3px solid #009688;
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
  tags: ['disc', 'other'],
};

export default loader;
