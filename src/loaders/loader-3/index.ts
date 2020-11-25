import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 3,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 80px;
    height: 80px;
    background: #ff222222;
    border-radius: 50%;
    position: relative;
    -webkit-animation: animate-rotate 1200ms linear infinite;
            animation: animate-rotate 1200ms linear infinite;
  }

  .loader::before {
    display: block;
    position: absolute;
    top: 30px;
    left: 5px;
    content: '';
    width: 15px;
    height: 15px;
    background: #f22;
    border-radius: 50%;
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
  tags: ['disc', 'single-div'],
};

export default loader;
