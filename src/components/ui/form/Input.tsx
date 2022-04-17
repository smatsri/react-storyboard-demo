import { useState } from "react"
import { uuid } from "../../../utils"
import "./Input.style.css"
import classNames from "classnames";

type InputProps = {
  type?: 'text' | 'password' | 'number',
  label: string
  error?: string
}

const Input = ({ type = "text", label, error }: InputProps) => {
  const [id] = useState(() => uuid())
  const invalid = !!error
  return (
    <div className={classNames({
      control: true,
      invalid
    })}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default Input;