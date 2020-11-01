import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import Prism from 'prismjs';

import Loader from '../Loader/Loader';
import ILoader from '../../types/ILoader';

import './style.scss';
import './prism-nord.css';

type props = {
  loader: ILoader;
  selectLoader: (loader: ILoader | undefined) => void;
};

const Modal: React.FC<props> = ({
  loader: { id, html, style, credits },
  selectLoader,
}) => {
  const [copied, setCopied] = useState({ html: false, style: false });
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    selectLoader(undefined);
  };

  useEffect(() => {
    Prism.highlightAll();
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalRef]);

  const onCopy = (name: 'html' | 'style', code: string) => {
    setCopied({ ...copied, [name]: true });
    copy(code);
    setTimeout(() => {
      setCopied({ html: false, style: false });
    }, 2500);
  };
  return (
    <div className="model-container">
      <div ref={modalRef} className="model">
        <div className="infos">
          {credits && (
            <div className="credits">
              <b>Credits: </b> <a href={credits.link || ''}>{credits?.name}</a>
            </div>
          )}
          <button type="button" className="close" onClick={closeModal}>
            <svg
              enableBackground="new 0 0 386.667 386.667"
              height="512"
              viewBox="0 0 386.667 386.667"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
            </svg>
          </button>
        </div>
        <div className="demo">
          <Loader id={id} html={html} />
        </div>
        <div className="code">
          <div className="html">
            <div className="title">
              <h4>HTML</h4>
              <button
                type="button"
                className="copy"
                onClick={() => onCopy('html', html)}
                disabled={copied.html}
              >
                {copied.html ? (
                  <svg
                    height="512"
                    viewBox="0 0 515.556 515.556"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#005eff"
                      d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    />
                  </svg>
                ) : (
                  <svg
                    height="512pt"
                    viewBox="-30 0 512 512"
                    width="512pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m452 108.898438-108.898438-108.898438h-223.101562v80h-120v432h332v-80h120zm-100.109375-57.683594 48.894531 48.894531h-48.894531zm-321.890625 430.785156v-372h171.890625v100.109375h100.109375v271.890625zm201.890625-350.785156 48.894531 48.894531h-48.894531zm100.109375 270.785156v-213.101562l-108.898438-108.898438h-73.101562v-50h171.890625v100.109375h100.109375v271.890625zm0 0" />
                  </svg>
                )}
              </button>
            </div>
            <div className="html-code">
              <pre>
                <code className="language-html">{html}</code>
              </pre>
            </div>
          </div>
          <div className="css">
            <div className="title">
              <h4>CSS</h4>
              <button
                type="button"
                className="copy"
                onClick={() => onCopy('style', style)}
                disabled={copied.style}
              >
                {copied.style ? (
                  <svg
                    height="512"
                    viewBox="0 0 515.556 515.556"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#005eff"
                      d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    />
                  </svg>
                ) : (
                  <svg
                    height="512pt"
                    viewBox="-30 0 512 512"
                    width="512pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m452 108.898438-108.898438-108.898438h-223.101562v80h-120v432h332v-80h120zm-100.109375-57.683594 48.894531 48.894531h-48.894531zm-321.890625 430.785156v-372h171.890625v100.109375h100.109375v271.890625zm201.890625-350.785156 48.894531 48.894531h-48.894531zm100.109375 270.785156v-213.101562l-108.898438-108.898438h-73.101562v-50h171.890625v100.109375h100.109375v271.890625zm0 0" />
                  </svg>
                )}
              </button>
            </div>
            <div className="css-code">
              <pre>
                <code className="language-css">{style}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  loader: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    style: PropTypes.string.isRequired,
    credits: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  }).isRequired,
  selectLoader: PropTypes.func.isRequired,
};

export default Modal;
