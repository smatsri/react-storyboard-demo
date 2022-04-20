import { useEffect, useState } from "react"
import classNames from "classnames"
import { FC } from "react"

import "./Form.style.css"

type Props = {
  children?: any[] | any | undefined
  onSubmit?(data: any): void
  vertical?: boolean
}

const Form: FC<Props> = ({ children, onSubmit, vertical }) => {
  const items = Array.isArray(children) ? children : children ? [children] : []

  return (
    <form onSubmit={onSubmit} className={classNames({
      vertical,
      form: true
    })}>
      {items.map((item) => (
        <div className="form-item">
          {item}
        </div>
      ))}
    </form>
  );
}

export default Form;