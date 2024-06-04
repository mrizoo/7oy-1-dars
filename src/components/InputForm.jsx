import React, { useRef } from "react";

function InputForm({ refs, name }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input
        ref={refs}
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
}

export default InputForm;
