import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const [ text, setText ] = useState("");

   // if text leng is
   // 0 to 5: short
   // 6 to 10: Medium
   // 11 or above: Long

   const [ textLength, setTextLength ] = useState("short");

    useEffect(() => {
      if (text.length > 10) {
        setTextLength("long");
      } else if (text.length > 5) {
        setTextLength("Medium");
      } else {
        setTextLength("short");
      }
    }, [text])

  return (
    <div className="App">
        <p>{text}</p>
        <p>{text.length}</p>
        <p>{textLength}</p>
        <input type="text" value={text}
          onChange={e => setText(e.target.value)}
          />
    </div>
  );
}

export default App;
