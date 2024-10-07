import { useRef, useState } from "react";

const Information =(prop)=>{
    const [show,setShow] = useState(false);
    const ref = useRef();
    function handleClick(){
             setShow(true);
    }
    function handleSave(){
        console.log(ref.current.value);
          document.getElementById(`${prop.name}`).innerHTML = (ref.current.value !== "" ? ref.current.value : prop.name);
          setShow(false);
    }
    return <div className="information">
    <div id={`${prop.name}`}>{prop.name}</div>
    {show && <input type ={!isNaN(prop.name) && !isNaN(parseFloat(prop.name)) ? "number":"text"}  ref = {ref}/>}
    {show && <button onClick={handleSave}>Save</button>}
    {!show &&   <button onClick = {handleClick}>Edit</button>}
    </div>
}
export default Information;