import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ComponentCard from "./components/ComponentCard";
import "./App.css";
const App = () => {
  const [quote, setQuote] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    const Response = data.slip;
    setQuote(Response);
    console.log(quote);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <ComponentCard quote={quote} />
    </div>
  );
};

export default App;
