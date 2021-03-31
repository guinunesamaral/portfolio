import React from "react";
import Photo from "../images/photo.jpeg";
import "./Greetings.css";

export const Greetings = () => {
  return (
    <div className="greetings">
      <div className="greetings__wrapper">
        <h3 className="greetings__title">Hi there!</h3>
        <div className="greetings__container">
          <img src={Photo} alt="my-img" className="greetings__img" />
          <div className="greetings__msg">
            <p className="greetings__paragraph">
              My name is Guilherme Nunes, I'm 19, I live in São Paulo, Brazil,
              and I am a junior developer. I created this page to share my
              projects and to let people contact me, because I'm looking for
              work opportunities. I really like to learn new technologies and
              most of the time I code with React.js, Java and TypeScript. Feel
              free to contact me and to follow in my other medias as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
