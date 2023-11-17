import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="d-flex justify-content-center gap-3 align-items-center">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        type="checkbox"
      />
      <div className="terms">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className="bg-light text-black p-2 rounded my-4"
        >
          Size gerçekten birşey teslim etmiyeceğiz
        </p>
        <label htmlFor="" className="lead">
          Koşulları okudum ve kabul ediyorum
        </label>
        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          disabled={!isChecked}
          className="btn btn-warning "
        >
          Siparişi Onayla
        </button>
      </div>
    </div>
  );
};

export default Form;
