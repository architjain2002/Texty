import React, { useState } from "react";
export default function TextBox(props) {
  const [prevstates, setarray] = useState([]);
  const [textcontent, setText] = useState("text...");

  const handlingonChange = (event) => {
    setText(event.target.value);
    console.log(textcontent);
    setarray((prevarray) => [...prevarray, textcontent]);
  };

  const handlingonClick_toLower = () => {
    console.log("to lower is clicked ->" + textcontent);
    let txt = textcontent.toLowerCase();
    setText(txt);
    setarray((prevarray) => [...prevarray, textcontent]);
  };

  const handlingonClick_toUpper = () => {
    console.log("to upper is clicked ->" + textcontent);
    let txt = textcontent.toUpperCase();
    setText(txt);
    setarray((prevarray) => [...prevarray, textcontent]);
  };
  const handlingonClick_clear = () => {
    console.log("clear is clicked ->" + textcontent);
    let txt = "";
    setText(txt);
    setarray((prevarray) => [...prevarray, textcontent]);
  };

  const handlingonClick_space = () => {
    console.log("clear is clicked ->" + textcontent);
    let txt = textcontent.replace(/  +/g, " ");
    setText(txt);
    setarray((prevarray) => [...prevarray, textcontent]);
  };

  const handlingonClick_newline = () => {
    console.log("clear is clicked ->" + textcontent);
    let txt = textcontent.replace(/\n\n+/g, "\n");
    setText(txt);
    setarray((prevarray) => [...prevarray, textcontent]);
  };

  const handlingonClick_undo = () => {
    console.log(prevstates);
    setText(prevstates.pop());
  };

  return (
    <div>
      <h6>{props.textheader}</h6>
      <textarea
        className="form-control mb-1 mt-1"
        rows="10"
        value={textcontent}
        onChange={handlingonChange}></textarea>
      <button
        className="btn btn-primary mx-1"
        onClick={handlingonClick_toUpper}>
        UpperCase
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={handlingonClick_toLower}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handlingonClick_clear}>
        clear
      </button>
      <button className="btn btn-primary mx-1" onClick={handlingonClick_space}>
        clear extra spaces
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={handlingonClick_newline}>
        clear extra lines
      </button>
      <button className="btn btn-primary mx-1" onClick={handlingonClick_undo}>
        undo
      </button>
    </div>
  );
}
