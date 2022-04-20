import Form from "./form/Form"
import Input from "./form/Input"
import "./LoginForm.css"

import { useLoginForm } from "../../hooks/useLoginForm";
import { ignore } from "../../../utils/general";

type Data = {
  username: string
  password: string
}
interface LoginFormProps extends Partial<Data> {
  title: string,
  logginError?: string
  onSubmit?(data: any): void
}
const LoginForm = ({
  title,
  onSubmit = ignore,
  username, password,
  logginError
}: LoginFormProps) => {
  
  const {errors, onSumbit:_onSubmit, register} = useLoginForm(username, password, onSubmit)

  return (
    <div>
      <div className="title">{title}</div>
      <Form onSubmit={_onSubmit}>
        <Input name="username"
          props={register("username")}
          error={errors.username?.message} />
        <Input name="password"
          type="password"
          props={register("password")}
          error={errors.password?.message} />
        <button type="submit">SEND</button>
        {logginError && <div><span data-testid="login-error">{logginError}</span></div>}
      </Form>
    </div>
  )
}

export default LoginForm;