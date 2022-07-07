import loader from "../spinner.gif";

const Loader = () => {
  return (
    <div className="spin">
      <img src={loader} style={{ width: "80px" }} alt="loading..." />
    </div>
  );
};

export default Loader;
