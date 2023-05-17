import React, {useState} from "react";

export default function TextArea(props) {

    const[text,setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#272c30':'white', color:props.mode==='light'?'black':'white'}}></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  )
}
