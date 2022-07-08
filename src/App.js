import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NewCard from "./components/NewCard";
const App = () => {
  const [quote, setQuote] = useState({});
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  const fetchDetails = async () => {
    setAnimate(true);
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    const Response = data.slip;
    setQuote(Response);
    setFade(true);
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
        <NewCard
          quote={quote}
          animate={animate}
          fade={fade}
          setAnimate={setAnimate}
          setFade={setFade}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default App;
