import React from "react";
import "./App.css";
import { Constants } from "./utils";
import { YoutubeListItem } from "./components";
export default function App() {
  const [query, setQuery] = React.useState("Search Videos");
  const [list, setList] = React.useState(null);
  async function searchYouTube(q) {
    q = encodeURIComponent(q);
    const response = await fetch(Constants.BASE_URL + q, {
      method: "GET",
      headers: {
        "x-rapidapi-host": Constants.RAPID_API_HOST,
        "x-rapidapi-key": Constants.RAPID_API_KEY,
      },
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter((item) => item.type === "video");
  }
  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };
  return (
    <div className="app">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search YouTube</button>
      </form>
      {list &&
        (list.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="items">
            {list.map((item) => (
              <YoutubeListItem key={item.id} data={item} />
            ))}
          </ul>
        ))}
    </div>
  );
}
