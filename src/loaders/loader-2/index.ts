import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 2,
  html: `<div class="loader"></div>`,
  style: `.loader{
    display: block;
    width: 80px;
    height: 80px;
    background: transparent;
    position: relative;
  }

  .loader:before,
  .loader:after {
    display: block;
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background: #009688;
    opacity: 0;
    border-radius: 50%;
    -webkit-animation: animate 1200ms ease-in-out infinite;
            animation: animate 1200ms ease-in-out infinite
  }

  .loader:after {
    -webkit-animation-delay: 400ms;
            animation-delay: 400ms;
  }

  @-webkit-keyframes animate {
    0%{
      opacity: 0.5;
      -webkit-transform: scale(0);
              transform: scale(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }

  @keyframes animate {
    0%{
      opacity: 0.5;
      -webkit-transform: scale(0);
              transform: scale(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }`,
  tags: ['disc', 'single-div'],
};

export default loader;
