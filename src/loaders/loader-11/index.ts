import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 11,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    border: 1px solid #FF980077;
    -webkit-animation: animate-rotate 800ms linear infinite;
            animation: animate-rotate 800ms linear infinite;
}

.loader:after {
    display: block;
    content: '';
    position: relative;
    top: 6px;
    background: #F57C00;
    width: 12px;
    height: 12px;
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
  tags: ['circle', 'dot'],
};

export default loader;
