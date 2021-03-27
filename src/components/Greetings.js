import React from "react";
import Photo from "./photo.jpeg";
import "./Greetings.css";

export const Greetings = () => {
  return (
    <div className="greetings">
      <div className="greetings__wrapper">
        <h3 className="greetings__title">Hi there!</h3>
        <div className="greetings__container">
          <img src={Photo} alt="photo" className="greetings__img" />
          <div className="greetings__msg">
            <p className="greetings__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              accusantium reiciendis, in voluptate laudantium incidunt ab
              molestiae magni ducimus ipsa quis aut. Quae tempore illo ea
              distinctio dolorum recusandae vitae? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi quod repellat neque impedit
              ipsam deleniti possimus? Provident repellendus dolores voluptates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
