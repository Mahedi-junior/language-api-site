import React, { useState } from "react";

const Csify = () => {
  const [selectsB, setSelectsB] = useState("");
  const [selectsS, setSelectsS] = useState("");

  const handleText = () => {
    const text = document.getElementById("textField");
    const innerText = text.value;
    // const inputText = innerText.toString();
    console.log(innerText);

    const showText = document.getElementById("show-text");
    showText.innerHTML = innerText;
    // console.log(showText);
  };
  return (
    <div className="container">
      <h2 className="mt-3 text-primary">Google Translate</h2>

      <div className="d-flex align-items-center justify-content-between mt-5">
        <div>
          <p className="fs-4">Base Language</p>
          <select
            className="secondary border px-5  py-3 fs-5 fw-semibold rounded text-primary"
            value={selectsB}
            onChange={(e) => setSelectsB(e.target.value)}
          >
            <option>English</option>
            <option>Japan</option>
          </select>
        </div>
        {/* <h1 className="text-primary">To</h1> */}
        <div>
          <p className="fs-5">Secondary Language</p>
          <select
            className="secondary border px-5 py-3 fs-5 fw-semibold rounded "
            value={selectsS}
            onChange={(e) => setSelectsS(e.target.value)}
          >
            <option>English</option>
            <option>Japan</option>
          </select>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-12 col-sm-6 text-area mt-3">
          <textarea
            rows="4"
            id="textField"
            className="form-control input-lg py-3 fs-4 fs-5"
            type="text-area "
            placeholder="Input Text ..."
          />
        </div>

        <div className="col-12 col-sm-6 text-area mt-3">
          <textarea
            rows="4"
            id="show-text"
            className="form-control input-lg py-3 fs-4 bg-light"
            type="text-area "
            placeholder="Translated Text"
            disabled
          />
        </div>
      </div>
      {
        <button
          onClick={handleText}
          className="btn w-50 bg-primary mt-5 text-white fs-3 "
        >
          Translate
        </button>
      }
    </div>
  );
};

export default Csify;
