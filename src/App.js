import React from "react";
import { data } from "./data.js";

function App() {
  const [input, setInput] = React.useState("");
  const [query, setQuery] = React.useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  const filteredData = data.filter((item) => {
    return item.nama_lengkap.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredData.map((item) => (
          <li
            style={{
              listStyle: "none",
              padding: "10px",
              margin: "10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
            key={item.nama_lengkap}
          >
            {item.nama_lengkap}
          </li>
        ))}
      </ul>
    </div>
  );}

export default App;
