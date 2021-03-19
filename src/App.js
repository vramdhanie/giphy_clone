import { useState, useEffect } from "react";
import "./App.css";

import Search from "./search";
import Results from "./results";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&limit=10";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then((data) => {
        //Todo:  clean up the data
        setGifs(data.data);
      });
  }, []);

  function doSearch(term) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f&limit=10&q=${term}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.status);
      })
      .then((data) => {
        //Todo:  clean up the data
        setGifs(data.data);
      });
  }

  return (
    <div className="App">
      <header>Giphy</header>
      <main>
        <Search doSearch={doSearch} />
        <Results gifs={gifs} />
      </main>
    </div>
  );
}

export default App;
