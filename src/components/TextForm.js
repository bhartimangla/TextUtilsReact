import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    // console.log("Lowercase was clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () => {
    // console.log("Clear was clicked!" + text);
    setText("");
  }

  const handleCopyClick = () => {
    // console.log("Copy was clicked!" + text);
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    // console.log("Extra Spaces was clicked!" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  // text = "new text"; // wrong way to update text value in state
  // setText("new text"); // Correct way to update text value
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>    
  )
}
