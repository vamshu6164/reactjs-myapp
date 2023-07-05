import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert('Converted to upper case!', 'success');
    }

    const handleLoClick = ()=>{
        let loText = text.toLowerCase();
        setText(loText);
        props.showAlert('Converted to lower case!', 'success');
    }

    const handleCopyTxt = ()=>{
        let cpText = document.getElementById('textarea');
        cpText.select();
        navigator.clipboard.writeText(cpText.value);
        props.showAlert('Text is copied!', 'success');
    }

    const handleRemoveExtraSpace = ()=>{
        let rmSpace = text.split(/[ ]+/);
        setText(rmSpace.join(" "))
        props.showAlert('Extra Space is Removed!', 'success');

    }

    const handleClearClick = ()=>{
        let clsText = "";
        setText(clsText);
    }

    const handleGetEmail = ()=>{
       let str = text;
       str = str.replace(/,/g, " ");
       let arr = str.split(" ");
       let myarr = "";
        let v = " | ";
        for(let i = 0 ; i<= arr.length-1; i++){
            if(regEmail.test(arr[i])){
                console.log(arr[i]);
                myarr = myarr + arr[i]+v;
            }
        }
        if(myarr.length>0){
            setEmail(myarr)
            props.showAlert('Emails are found!', 'success');
        }else{
            setEmail("emails are not found");
            props.showAlert('Emails are not found!', 'warning');

        }
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let [email, setEmail] = useState([""]);

  return (
    <>
    <div className='container' style={{color:props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" style={{backgroundColor: props.mode === 'light'?'white':'grey', color:props.mode === 'light'?'black':'white'}} placeholder='Enter the text here' rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{backgroundColor : props.radioActive}}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} style={{backgroundColor : props.radioActive}}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyTxt} style={{backgroundColor : props.radioActive}}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace} style={{backgroundColor : props.radioActive}}>Remove Extra Space</button>
        <button className="btn btn-outline-secondary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-outline-info mx-1" onClick={handleGetEmail}>Get Emails</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h2 >your text summary</h2>
        <p>{text === "" ? "0":text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{text === "" ? "0" : 0.008 * text.trim().split(/\s+/).length} Minuts to read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:'Enter somthing in the textbox above to preview it here!'}</p>
        <h3>Emails</h3>
        <p>Emails : {email}</p>
    </div>
    </>
    
  )
}
