import React from "react";
import "./SocialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <div className="socialMedia__wrapper">
        <h3 className="socialMedia__title">Social Media</h3>
        <ul className="socialMedia__container">
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gab.com/"
              className="socialMedia__link"
            >
              Gab Social
            </a>
          </li>
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/"
              className="socialMedia__link"
            >
              Twitter
            </a>
          </li>
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/guilherme-nunes-amaral/"
              className="socialMedia__link"
            >
              LinkedIn
            </a>
          </li>
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/guinunesamaral"
              className="socialMedia__link"
            >
              GitHub
            </a>
          </li>
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://duckduckgo.com"
              className="socialMedia__link"
            >
              Email
            </a>
          </li>
          <li className="socialMedia__li">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://duckduckgo.com"
              className="socialMedia__link"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
