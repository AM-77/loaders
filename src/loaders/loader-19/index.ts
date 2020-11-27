import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 19,
  html: `<div class="loader"><div></div><div></div></div>`,
  style: `.loader {
    display: block;
    width: 60px;
    height: 60px;
    background-color: #b71c1c;
    border-radius: 50%;
    position: relative;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-animation: rotate 900ms ease infinite;
            animation: rotate 900ms ease infinite;
}

@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }

    50% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }

    100% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
}

@keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }

    50% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }

    100% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
}

.loader div {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 18px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

.loader div:before,
.loader div:after {
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f1f2f3;
    margin: 0;
    position: relative;
}

.loader div:before{
    top: 0;
    left: 0;
}

.loader div:after {
    bottom: -8px;
    right: -16px;
}

.loader div:last-child {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg);
}`,
  tags: ['circle', 'dot'],
};

export default loader;
