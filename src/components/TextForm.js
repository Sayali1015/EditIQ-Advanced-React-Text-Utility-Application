import React, { useState } from 'react';

export default function TextForm(props) {
  
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);



  const handleUpper = () => setText(text.toUpperCase());
  const handleLower = () => setText(text.toLowerCase());
  const handleClear = () => setText("");

  const handleChange = (e) => {
  setUndoStack([...undoStack, text]); // save previous state
  setRedoStack([]);                   // clear redo history
  setText(e.target.value);
};

  const handleUndo = () => {
  if (undoStack.length === 0) return;
  const lastText = undoStack[undoStack.length - 1];
  setRedoStack([text, ...redoStack]);
  setUndoStack(undoStack.slice(0, -1));
  setText(lastText);
};

  const handleRedo = () => {
  if (redoStack.length === 0) return;

  const nextText = redoStack[0];
  setUndoStack([...undoStack, text]);
  setRedoStack(redoStack.slice(1));
  setText(nextText);
};

  const handleExtraSpace = () => {
    setText(text.split(/\s+/).join(" "));
  };

 const handleCopy = () => {
  navigator.clipboard.writeText(text);

  const toastEl = document.getElementById('copyToast');
  const toast = new window.bootstrap.Toast(toastEl);
  toast.show();
};

  const speak = () => {
  if (text.trim().length === 0) return;

  // stop any ongoing speech first
  window.speechSynthesis.cancel();

  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 1;
  msg.pitch = 1;
  msg.volume = 1;

  window.speechSynthesis.speak(msg);
};

const stopSpeak = () => {
  window.speechSynthesis.cancel();
};


  const handleReverse = () => {
  let newText = text.split("").reverse().join("");
  setText(newText);
};

  const handleRemoveNumbers = () => {
  let newText = text.replace(/[0-9]/g, "");
  setText(newText);
};

const handleRemoveSpecialChars = () => {
  let newText = text.replace(/[^a-zA-Z0-9 ]/g, "");
  setText(newText);
};

const handleFindReplace = () => {
  if (findText === "") return;
  let newText = text.split(findText).join(replaceText);
  setText(newText);
};




  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  

  return (
    <>
      <div
        className="card shadow-lg p-4"
        style={{
          backgroundColor: props.mode === 'dark' ? '#1e1e1e' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >
        <h2 className="mb-3">{props.heading}</h2>

        <textarea
          className="form-control mb-3"
          rows="7"
          value={text}
          onChange={handleChange}
          placeholder="Type or paste your text here..."
          style={{
            backgroundColor: props.mode === 'dark' ? '#2c2c2c' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
          
        />

        <div className="row my-3">
  <div className="col-md-4">
    <input
      type="text"
      className="form-control"
      placeholder="Find"
      value={findText}
      onChange={(e) => setFindText(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <input
      type="text"
      className="form-control"
      placeholder="Replace with"
      value={replaceText}
      onChange={(e) => setReplaceText(e.target.value)}
    />
  </div>

  <div className="col-md-4">
    <button
      className="btn btn-success w-100"
      disabled={!text || !findText}
      onClick={handleFindReplace}
    >
      Find & Replace
    </button>
  </div>
</div>


        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-primary" disabled={!text} onClick={handleUpper}>Uppercase</button>
          <button className="btn btn-secondary" disabled={!text} onClick={handleLower}>Lowercase</button>
          <button className="btn btn-success" disabled={!text} onClick={speak}>Speak</button>
          <button className="btn btn-danger mx-1" disabled={!text} onClick={stopSpeak}> Stop Speaking</button>

          <button className="btn btn-warning" disabled={!text} onClick={handleCopy}>Copy</button>
          <button className="btn btn-info" disabled={!text} onClick={handleExtraSpace}>Remove Spaces</button>
          <button className="btn btn-success" disabled={!text} onClick={handleReverse}>Reverse</button>
          <button className="btn btn-warning" disabled={!text} onClick={handleRemoveNumbers}>Remove Numbers</button>
          <button className="btn btn-secondary" disabled={!text} onClick={handleRemoveSpecialChars}>Remove Symbols</button>
          <button className="btn btn-warning mx-1" disabled={undoStack.length === 0} onClick={handleUndo}> Undo </button>
          <button className="btn btn-primary mx-1" disabled={redoStack.length === 0} onClick={handleRedo}> Redo </button>
          <button className="btn btn-danger" disabled={!text} onClick={handleClear}>Clear</button>


        </div>
      </div>

      <div
        className="card shadow-sm p-3 mt-4"
        style={{
          backgroundColor: props.mode === 'dark' ? '#1e1e1e' : 'white',
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >
        <h4>Text Summary</h4>
        <p>📝 Words: <b>{wordCount}</b></p>
        <p>🔠 Characters: <b>{text.length}</b></p>
        <p>⏱ Reading Time: <b>{(0.008 * wordCount).toFixed(2)}</b> minutes</p>

        <h5 className="mt-3">Preview</h5>
        <p className="border p-2 rounded">
          {text.length > 0 ? text : "Nothing to preview"}
        </p>
      </div>

      {/* Toast */}
<div className="toast-container position-fixed bottom-0 end-0 p-3">
  <div
    className="toast align-items-center text-bg-success border-0"
    id="copyToast"
    role="alert"
  >
    <div className="d-flex">
      <div className="toast-body">
        ✅ Text copied to clipboard!
      </div>
      <button
        type="button"
        className="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
      ></button>
    </div>
  </div>
</div>

    </>
  );
}
