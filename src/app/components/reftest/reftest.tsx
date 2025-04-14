"use client";

import { useRef } from "react";
import Button3 from "../button3/button3";
import Button2 from "../button2/button2";

export default function Reftest() {
  const myBtn1 = useRef(null);
  const myBtn2 = useRef(null);

  function handleClick() {
    console.log("button clicked");
    console.log("myBtn1.current:", myBtn1.current);
    console.log("myBtn2.current:", myBtn2.current);
  }

  return (
    <div>
      <h1>Ref Test</h1>
      <p>This is a reference test</p>
      <Button3 buttonRef={myBtn1} onClick={handleClick}>
        button3 reftest (myBtn1)
      </Button3>
      <Button2 variant="secondary" onClick={handleClick}>
        button2 reftest (myBtn2)
      </Button2>
    </div>
  );
}
