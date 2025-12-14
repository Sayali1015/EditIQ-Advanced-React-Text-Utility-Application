import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText (newText);
  }

    const handleLoClick =() =>{
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText (newText);
  }

  const handleOnChange =(event) =>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const speak = () => {
  window.speechSynthesis.cancel(); // stop previous speech
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  };

  const capitalFirstLetter = ()=>{
        let words = text.split(" ")
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    };

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    };
    
  const handleClearText =() =>{
    // console.log("Uppercase was clicked " + text);
    let newText = " ";
    setText (newText);
  }
  
  const [text, setText] = useState(''); //state
  // text = "new text" // Wrong way to change the state
  // setText ("new text"); // Correct way to change the state

  return (
    <>
    <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lowercase</button>
    <button className="btn btn-primary mx-2 my-2" type="submit" onClick={speak} >Speak</button>
    <button className="btn btn-primary mx-2 my-2" type="submit" onClick={capitalFirstLetter} >Capitalize</button>
    <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>



</div>
<div className="container my-3">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
 )
}


