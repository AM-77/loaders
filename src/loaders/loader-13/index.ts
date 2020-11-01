import ILoader from '../../types/ILoader';
import './style.scss';

const loader: ILoader = {
  id: 13,
  html: `<div class="loader"></div>`,
  style: `.loader {
    display: block;
    width: 70px;
    height: 70px;
    background: #004D40;
    position: relative;
    -webkit-transform-origin: center;
        -ms-transform-origin: center;
            transform-origin: center;
    -webkit-animation: animate-flip 900ms ease-in-out infinite;
            animation: animate-flip 900ms ease-in-out infinite;
}


 @-webkit-keyframes animate-flip {
     0% {
         -webkit-transform: perspective(140px) rotate(0deg);
                 transform: perspective(140px) rotate(0deg);
     }
     50% {
         -webkit-transform: perspective(140px) rotateY(180deg);
                 transform: perspective(140px) rotateY(180deg);
     }

     100% {
         -webkit-transform: perspective(140px) rotateZ(-180deg);
                 transform: perspective(140px) rotateZ(-180deg);
     }
 }


 @keyframes animate-flip {
     0% {
         -webkit-transform: perspective(140px) rotate(0deg);
                 transform: perspective(140px) rotate(0deg);
     }
     50% {
         -webkit-transform: perspective(140px) rotateY(180deg);
                 transform: perspective(140px) rotateY(180deg);
     }

     100% {
         -webkit-transform: perspective(140px) rotateZ(-180deg);
                 transform: perspective(140px) rotateZ(-180deg);
     }
 }`,
  tags: ['other'],
};

export default loader;
