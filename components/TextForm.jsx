import React  ,{ useState } from 'react'

export const TextForm = (props) => {
  const[Text,setText]=useState("")
  const[History,setHistory]=useState([])
  const[RedoHistory,setRedoHistory]=useState([])
  const handleChange=event=>{
    const newText=event.target.value;
    setText(newText)
    setHistory([...History,newText])
    setRedoHistory([])
  }
  const handleupper=()=>{
    const newText=Text.toUpperCase()
    setText(newText)
    setHistory([...History,newText])
    setRedoHistory([])
    props.showAlert("Text converted to UpperCase","success")
  }
  const handleLower=()=>{
    const newText=Text.toLowerCase()
    setText(newText)
    setHistory([...History,newText])
    setRedoHistory([])
    props.showAlert("Text converted to LowerCase","success")
  }
  const handleclear=()=>{ 
    setText("")
    setHistory([...History,""])
    setRedoHistory([])
    props.showAlert("Text Cleared","success")
  }
  const handleundo=()=>{
if(History.length>1){
const previousText=History[History.length-2];
setText(previousText)
setHistory(History.slice(0,-1))
setRedoHistory([...RedoHistory,Text])
}
  }
  const handleRedo=()=>{
    if (RedoHistory.length > 0) {
      const nextText = RedoHistory[RedoHistory.length - 1];
      setText(nextText);
      setHistory([...History, nextText]);
      setRedoHistory(RedoHistory.slice(0, -1));
    }
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(Text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text:', error);
      });
      props.showAlert("Text copied","success")
  };
  const handleSpace=()=>{
    let newText=Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("space Removed","success")
  }
  return (
    <>
    <div className="container my-3">
    
      <h1 className="text-danger" >Enter Text</h1>
      <textarea name="text" id="" cols="130" rows="10" value={Text} className="p-3 my-2" onChange={handleChange} style={{resize:"none"}}></textarea>
      <br/>
      <button className="btn btn-outline-danger mx-3" onClick={handleupper} >Convert to UpperCase</button>
      <button className="btn btn-outline-warning  mx-3" onClick={handleLower}>convert to LowerCase</button>
      <button className="btn btn-outline-success  mx-3" onClick={handleclear}>Clear</button>
      <button className={`btn btn-outline-${props.mode === 'dark' ? 'dark' : 'light'} mx-3`} onClick={handleundo}>undo</button>
      <button className={`btn btn-outline-${props.mode === 'dark' ? 'dark' : 'light'} mx-3`}  onClick={handleRedo}>Redo</button>
      <button className={`btn btn-outline-${props.mode === 'dark' ? 'dark' : 'light'} mx-3`}  onClick={handleCopy}>Copy</button>
      <button className={`btn btn-outline-${props.mode === 'dark' ? 'dark' : 'light'} mx-3`}  onClick={handleSpace}>Space Remove</button>
      </div>
      <hr />
      <div className="container">
        <h4 className='text-danger fw-bold my-2'>Text Summary</h4>
        <p className='bg-dark text-light p-3'>{Text.split(" ").length-1} Words {Text.replace(/\s/g, "").length} Characters</p>

      </div>
      <hr/>
      <div className="container">
      <h4 className="text-danger fw-bold my-2">Preview</h4>
      <p className={`text-${props.mode==='dark'? 'dark': 'white'}`}><i>{Text.length>0 ? Text : <span style={{ color: 'green',fontWeight:'bold' }}>Write something in the above-given box to preview</span> }</i></p>
      </div>
      </>
  )
}

export default TextForm
