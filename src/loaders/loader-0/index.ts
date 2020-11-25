import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 0,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 60px;
    height: 60px;
    background: #2196f3;
    border-radius: 50%;
    -webkit-animation: spin 3500ms ease-in-out infinite;
            animation: spin 3500ms ease-in-out infinite;
  }

  @-webkit-keyframes spin {
     0%, 100% {
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
    }

    0% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }

    50% {
      -webkit-transform: rotateY(1800deg);
              transform: rotateY(1800deg);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }

    100% {
      -webkit-transform: rotateY(3600deg);
              transform: rotateY(3600deg);
    }
  }

  @keyframes spin {
     0%, 100% {
      -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
    }

    0% {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }

    50% {
      -webkit-transform: rotateY(1800deg);
              transform: rotateY(1800deg);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }

    100% {
      -webkit-transform: rotateY(3600deg);
              transform: rotateY(3600deg);
    }
  }`,
  tags: ['disc', 'single-div'],
};

export default loader;
