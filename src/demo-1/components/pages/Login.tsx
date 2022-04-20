import { useLogin } from "../../hooks/useLogin";
import LoginForm from "../ui/LoginForm";

const Login = () => {
  const { loggedIn, loginError, onSumbit, user } = useLogin();
  if (!loggedIn) {
    return (
      <div>
        <LoginForm
          title="Login"
          onSubmit={onSumbit}
          logginError={loginError} />

      </div>
    )

  }
  return (
    <div data-testid="success-message">
      welcome {user?.username}
    </div>
  )
}

export default Login;