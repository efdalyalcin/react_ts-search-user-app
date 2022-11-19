import { useState } from "react";
import "./AddLinkInput.scss";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeHolder: string;
  type: string;
  hasError: boolean;
  errorText: string
};

// this is a dummy input component
export default function AddLinkInput({
  input,
  setInput,
  label,
  type,
  hasError,
  placeHolder,
  errorText,
}: Props) {
  const [id] = useState(Math.random());

  return (
    <div className="AddLinkInput">
      <label
        htmlFor={String(id)}
        className={
          "AddLinkInput__label" +
          (hasError ? " AddLinkInput__label--error" : "")
        }
      >
        {label}
      </label>
      <input
        className={
          "AddLinkInput__input" +
          (hasError ? " AddLinkInput__input--error" : "")
        }
        id={String(id)}
        type={type}
        value={input}
        placeholder={placeHolder}
        onChange={(e) => setInput(e.target.value)}
      />
      <p
        className={
          "AddLinkInput__feedback" + (hasError ? " AddLinkInput__feedback--error" : "")
        }
      >
        {errorText}
      </p>
    </div>
  );
}
