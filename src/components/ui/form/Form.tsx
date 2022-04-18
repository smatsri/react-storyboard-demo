import { FC } from "react"

import "./Form.style.css"

type Props = {
  children?: any
  onSubmit?(data: any): void
}

const Form: FC<Props> = ({ children, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;