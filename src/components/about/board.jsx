import React from "react";
import parse from "html-react-parser";

// import "../../styles/blocks/hero.sass";

const Board = (props) => {
  const board = props.content;
  return (
    <section className="board gray-bg">
      <div className="wrapper content center-text">
        <h2 className="nobel-font uppercase">{board.title}</h2>
      </div>
    </section>
  );
};

export default Board;
