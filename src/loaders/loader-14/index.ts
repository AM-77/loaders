import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 14,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 20px;
    height: 20px;
    background: #E57373;
    border-radius: 50%;
    position: relative;
  }

  .loader:before,
  .loader:after {
    display: block;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    content: '';
    width: 60px;
    height: 60px;
    background: transparent;
    border: 3px solid #E57373;
    border-left-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: -20px;
    -webkit-animation: rotate-forward 800ms linear infinite;
            animation: rotate-forward 800ms linear infinite;
  }

  .loader:after {
    width: 40px;
    height: 40px;
    top: -10px;
    left: -10px;
    -webkit-animation: rotate-backward 800ms linear infinite;
            animation: rotate-backward 800ms linear infinite;
  }

  @-webkit-keyframes rotate-forward {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
    }

    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg)
    }
  }

  @keyframes rotate-forward {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
    }

    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg)
    }
  }

  @-webkit-keyframes rotate-backward {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
    }

    100% {
      -webkit-transform: rotate(-360deg);
              transform: rotate(-360deg)
    }
  }

  @keyframes rotate-backward {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
    }

    100% {
      -webkit-transform: rotate(-360deg);
              transform: rotate(-360deg)
    }
  }`,
  tags: ['dot', 'circle'],
};

export default loader;
