import React, { useState } from "react";

const CForm = ({ addEntries }) => {
  const [inputForm, setInputForm] = useState();

  const handleInput = e => {
    addEntries(inputForm);
    setInputForm("");
  };
  return (
    <div className="containers mt-5">
      <form>
        <div className="row">
          <h2 className="col">
            <strong>Fun With AI</strong>
          </h2>
        </div>
        <div>
          <p className="first-paragraph mt-3">Enter prompt</p>
        </div>
        <div>
          <textarea
            rows="8"
            className="col-12"
            name="inputForm"
            onChange={e => setInputForm(e.target.value)}
            value={inputForm}
          />
        </div>
        <div className="">
          <button
            className="btn btn-primary mt-1 right"
            type="button"
            onClick={handleInput}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CForm;
