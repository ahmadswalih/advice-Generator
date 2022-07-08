import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NewCard from "./components/NewCard";
const App = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    const Response = data.slip;
    setQuote(Response);
    setLoading(false);
  };
  const onSubmit = () => {
    fetchDetails();
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <div className="new">
        {/* {<ComponentCard quote={quote} loading={loading} onSubmit={onSubmit} />} */}
        <NewCard quote={quote} loading={loading} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default App;
