import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 17,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid #E0E0E0;
    border-radius: 50%;
    border-top-color: #263238;
    -webkit-animation: spin 1s ease-in-out infinite;
            animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1000ms ease-in-out infinite;
            animation: spin 1000ms ease-in-out infinite;
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }

   @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }`,
  tags: ['circle', 'other', 'single-div'],
};

export default loader;
