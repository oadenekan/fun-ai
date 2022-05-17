import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CForm from "./CForm";
import CResult from "./CResult";

const App = props => {
  const [allentries, setAllEntries] = useState([]);
  useEffect(() => {
    const getItem = localStorage.getItem("data");
    if (getItem) {
      const parsedItem = JSON.parse(getItem);
      setAllEntries(parsedItem);
    }
  }, []);

  const addEntries = (entry, ans) => {
    (async () => {
      const data = {
        prompt: entry,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      };

      const getIt = await fetch(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
          },
          body: JSON.stringify(data)
        }
      );
      let answer = await getIt.json();
      answer = answer.choices[0].text;

      const entries = [{ entry, answer }, ...allentries];
      console.log(entries, 'entries')
      setAllEntries(entries);
      localStorage.setItem("data", JSON.stringify(entries));
    })();
  };
  return (
    <React.Fragment>
      <CForm addEntries={addEntries} />
      <CResult result={allentries} />
    </React.Fragment>
  );
};

export default App;
