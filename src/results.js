import Thumbnail from "./thumbnail";

const Results = ({ gifs }) => {
  return (
    <div className="results">
      {gifs.map((gif) => (
        <Thumbnail {...gif} />
      ))}
    </div>
  );
};

export default Results;
