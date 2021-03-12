import React, { useState } from "react";
import Person from "./components/Person";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(`https://picsum.photos/id/0/960/640`);
  const ClickPev = () => {
    if (count - 1 < 0) {
      alert("LỖI : ID KHÔNG HỢP LỆ");
      setCount(count);
      setImage(`https://picsum.photos/id/0/960/640`);
      return;
    }
    let url = `https://picsum.photos/id/${count - 1}/960/640`;
    console.log(url);
    setCount(count - 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };
  const ClickNext = () => {
    let url = `https://picsum.photos/id/${count + 1}/960/640`;
    console.log(url);
    setCount(count + 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };
  const NumberPost = () => {
    let id = parseInt(document.getElementById("nhi").value);
    console.log(id);
    let url = `https://picsum.photos/id/${id}/960/640`;
    setCount(id);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
  };

  return (
    <div id="content">
      <div id="nav">
        <div id="header_left">From Front-End Team With &hearts;</div>
        {/* <p>Photo id : {count} </p> */}
        <div id="header_right">
          <Person changed={NumberPost} />
        </div>
      </div>
      <img id="img" alt="this is a image from lorem picsum" src={image}></img>

      <div id="footer">
        <button className="btn next" type="button" onClick={ClickPev}>
          Prev
        </button>
        <button className="btn prev" type="button" onClick={ClickNext}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
