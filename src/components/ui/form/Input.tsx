import { useState } from "react"
import { uuid } from "../../../utils/general"
import "./Input.style.css"
import classNames from "classnames";

type InputProps = {
  type?: 'text' | 'password' | 'number'
  name: string
  label?: string
  error?: string
  props?: any
}

const Input = (
  {
    type = "text",
    label,
    error,
    name,
    props = {}
  }: InputProps
) => {
  const [id] = useState(() => uuid())
  const invalid = !!error
  label = label || name
  return (
    <div className={classNames(
      {
        control: true,
        invalid
      })}
      data-testid={`ctr-${name}`} >
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} type={type} data-testid={`in-${name}`} />
      {invalid && <span data-testid={`err-${name}`}>{error}</span>}
    </div>
  );
}

export default Input;