import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 18,
  html: `<div class="loader"><div></div><div></div><div></div></div>`,
  style: `.loader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 50px;
    height: 30px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-animation: rotate 900ms ease infinite;
            animation: rotate 900ms ease infinite;
  }

  .loader span {
    display: block;
    width: 12px;
    height: 12px;
    background-color: #3bffc4;
    border-radius: 50%;
    opacity: 0;
  }

  .loader span:nth-child(1) {
    -webkit-animation: fade 900ms linear 0ms infinite running;
            animation: fade 900ms linear 0ms infinite running;
  }

  .loader span:nth-child(2) {
    -webkit-animation: fade 900ms linear 150ms infinite running;
            animation: fade 900ms linear 150ms infinite running;
  }

  .loader span:nth-child(3) {
    -webkit-animation: fade 900ms linear 300ms infinite running;
            animation: fade 900ms linear 300ms infinite running;
  }

  @-webkit-keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }`,
  tags: ['dot'],
};

export default loader;
