// import { useState } from 'react'
import "./App.css";
import Content from "./components/Sections/Content";
import Header from "./components/Header";
import { useState } from "react";
import Links from "./components/Sections/Links";

function App() {
  const [displayedContent, setDisplayedContent] = useState(0);
  return (
    <div className='container-fluid app-container'>
      <Header
        displayedContent={displayedContent}
        onDisplayContent={setDisplayedContent}
      />
      <Content displayedContent={displayedContent} />
      <h2 style={{textAlign: 'center', color:"#48d9f3"}}>Connect with me:</h2>
      <Links />
    </div>
  );
}

export default App;
