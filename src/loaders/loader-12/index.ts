import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 12,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 70px;
    height: 70px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    border: 3px solid transparent;
    border-left: 3px solid #3F51B5;
    -webkit-animation: animate-rotate 900ms linear infinite;
            animation: animate-rotate 900ms linear infinite;
}

.loader:before,
.loader:after {
    display: block;
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% - 10px);
    height:calc(100% - 10px);
    border-radius: 50%;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    border: 3px solid transparent;
    border-left: 3px solid #3F51B5;
    -webkit-animation: animate-rotate 900ms linear infinite;
            animation: animate-rotate 900ms linear infinite;
}

.loader:before {
    width: calc(100% - 30px);
    height:calc(100% - 30px);
    top: 15px;
    left: 15px;
    -webkit-animation: animate-rotate 600ms linear 300ms infinite;
            animation: animate-rotate 600ms linear 300ms infinite;
}

@-webkit-keyframes animate-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes animate-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}`,
  tags: ['circle', 'other', 'single-div'],
};

export default loader;
