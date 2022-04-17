import { useState } from "react"
import { uuid } from "../../../utils"
import "./Input.style.css"

type InputProps = {
  type: 'text' | 'password' | 'number',
  label: string
}

const Input = ({ type = "text", label }: InputProps) => {
  const [id] = useState(() => uuid())
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default Input;