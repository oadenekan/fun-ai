import React from 'react';

const CForm = () => {
  return (
    <div className="containers mt-5">
      <form id="textarea-form">
        <div className="row">
          <h2 lassName="col"><strong>Fun With AI</strong></h2>
        </div>
        <div>
          <p class="first-paragraph mt-3">Enter prompt</p>
        </div>
        <div>
          <textarea rows="8" className="col-12 prompt-words" name="words"></textarea>
        </div>
        <div className="">
          <button className="btn btn-primary mt-1 col-3 offset-9" type="button" onclick="aiRequest(prompt)">Submit</button>
        </div>
        <br/><br/><br/>
        <div>
          <h5><strong>Responses</strong></h5>
        </div>
        <div className="responses" id="new-response"></div>
      </form>
    </div>
  )
}
export default CForm;