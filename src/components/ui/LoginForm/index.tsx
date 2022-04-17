import Form from "../form/Form"
import Input from "../form/Input"
import "./style.css"

type LoginFormProps = {
  title: string
}
const LoginForm = ({ title }: LoginFormProps) => {

  return (
    <div>
      <div className="title">{title}</div>
      <Form>
        <Input label="username" />
        <Input label="password" type="password" />
      </Form>
    </div>
  )
}

export default LoginForm;