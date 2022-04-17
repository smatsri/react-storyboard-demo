import "./style.css"

type LoginFormProps = {
  title: string
}
const LoginForm = ({ title }: LoginFormProps) => {

  return (
    <div>
      <div>{title}</div>
      <form>
        
      </form>
    </div>
  )
}

export default LoginForm;