import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useContext, useState } from "react";
import langContext from "./utils/langContext";

function App() {
  const { lang: defaultLang } = useContext(langContext);
  const [lang, setLang] = useState(defaultLang);

  return (
    <div className="App">
      <langContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <Body />
      </langContext.Provider>
    </div>
  );
}

export default App;
