import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 16,
  html: `<div class="loader"></div>`,
  style: `.loader {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    -webkit-animation: spin 1200ms linear infinite;
            animation: spin 1200ms linear infinite;
  }

  .loader::before,
  .loader::after {
    display: inline-block;
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  .loader::before {
    width: 10px;
    height: 10px;
    left: -10px;
    top: -10px;
    background: #212121;
    -webkit-animation: back-forth-before 800ms linear infinite;
            animation: back-forth-before 800ms linear infinite;
  }

  .loader::after {
    width: 10px;
    height: 10px;
    left: 30px;
    top: 30px;
    background: #212121;
    -webkit-animation: back-forth-after 800ms linear infinite;
            animation: back-forth-after 800ms linear infinite;
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

  @-webkit-keyframes back-forth-before {
    0%, 100% {
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }

    50% {
      -webkit-transform: translateX(20px) translateY(20px) ;
              transform: translateX(20px) translateY(20px) ;
    }
  }

  @keyframes back-forth-before {
    0%, 100% {
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }

    50% {
      -webkit-transform: translateX(20px) translateY(20px) ;
              transform: translateX(20px) translateY(20px) ;
    }
  }

  @-webkit-keyframes back-forth-after {
    0%, 100% {
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }

    50% {
      -webkit-transform: translateX(-20px) translateY(-20px) ;
              transform: translateX(-20px) translateY(-20px) ;
    }
  }

  @keyframes back-forth-after {
    0%, 100% {
      -webkit-transform: translateX(0) translateY(0);
              transform: translateX(0) translateY(0);
    }

    50% {
      -webkit-transform: translateX(-20px) translateY(-20px) ;
              transform: translateX(-20px) translateY(-20px) ;
    }
  }`,
  tags: ['dot', 'single-div'],
};

export default loader;
