import { FC } from "react"

import "./Form.style.css"

type Props = {
}

const Form:FC<any> = ({ children }) => {
  return (
    <form>
      {children}
    </form>
  );
}

export default Form;