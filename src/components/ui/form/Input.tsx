import { useState } from "react"
import { useFormContext } from "react-hook-form";
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
    <div className={classNames({
      control: true,
      invalid
    })}>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} type={type} />
    </div>
  );
}

export default Input;