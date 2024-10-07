import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./components/Display";
import PDFUploader from "./components/PDFUploader";
import ImageUploader from "./components/ImageUploader";
import ScrollToBottom from "./components/ScrollToBottom";
function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [data, setData] = useState([]);
  function clear() {
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
  }
  function handleClick() {
    setData((prev) => {
      const newData = [...prev];
      const name = ref1.current.value;
      const email = ref2.current.value;
      const number = ref3.current.value;

      let errorMessages = [];

      if (name === "") errorMessages.push("Enter name");
      if (email === "") errorMessages.push("Enter email");
      if (number === "") errorMessages.push("Enter valid number");

      if (errorMessages.length > 0) {
        if (errorMessages.length === 3) {
          alert("Enter full details");
          console.log("2");
        } else {
          alert(errorMessages.join("\n"));
        }
        return newData;
      }

      let x = true;
      const checkName = !isNaN(name) && !isNaN(parseFloat(name));
      const checkEmail = !isNaN(email) && !isNaN(parseFloat(email));
      if (checkEmail || checkName) {
        if (checkName) {
          alert("Enter valid name");
        } else if (checkEmail) {
          alert("Enter valid email");
        }
        return newData;
      }
      newData.map((d) => {
        let s1 = d.name;
        let s2 = d.email;
        let s3 = d.number;
        if (s1 === name && s2 === email && s3 === number) {
          x = false;
        }
      });
      if (x) {
        newData.push({
          name: name,
          email: email,
          number: number,
          id: Date.now(),
          componentOne: PDFUploader,
          componentTwo:ImageUploader
        });
        console.log(`New entry added with name : ${name} , email : ${email} and contact Number ${number}.`)
      }
      console.log(newData);
      return newData;
    });
  }
  function handleRemove(id,idx) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (shouldDelete) {
      const filteredData = data.filter((d) => d.id !== id);
      console.log("Deleted entry number:" , idx+1);
      setData(filteredData);
    }
  }
  return (
    <div id='container'>
      
      <h1>Employee List</h1>
      <div id="bottom"><ScrollToBottom/></div>
      
      <div id="info">
      <input type="text" placeholder="Enter your name" ref={ref1} />
      <input type="email" placeholder="Enter your email" ref={ref2} />
      <input type="number" placeholder="Enter your number" ref={ref3} />
      <button className="btn" onClick={handleClick}>
        Add
      </button>
      <button onClick={clear}>Clear</button>
      </div>
      <div id="section">
      <div id="sno">SNo.</div>
      <div id="name">Full Name</div>
      <div id="email">Email</div>
      <div id="num">Contact Number</div>
      <div id="res">Resume</div>
      </div>
      <Display data={data} handleRemove={handleRemove} />
      
    </div>
  );
}

export default App;
