import React from "react";

function CResult(props) {
  return (
    <React.Fragment>
      <div className="containers mt-5">
        {props.result.length > 0 && (
          <h5>
            <strong>Responses</strong>
          </h5>
        )}
        <ul className="parent-list">
          {props.result.map((res, index) => (
            <li key={index}>
              <div className="responses row">
                  <span className="col-2">Prompt:</span>
                  <span className="col-10">{res.entry}</span>
              </div>
              <div className="responses row">
                <span className="col-2">Response:</span>
                <span className="col-10">{res.answer}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default CResult;
