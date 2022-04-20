import { useState } from "react"
import { useApiService } from "../providers/ApiProvider"
import { LoginRequest, User } from "../services/types"

export const useLogin = () => {
  const api = useApiService()
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string | undefined>()
  const [user, setUser] = useState<User | undefined>()

  return {
    async onSumbit(req: LoginRequest) {
      const res = await api.login(req)
      if (res.success) {
        setLoggedIn(true);
        setUser(res.user)
      } else {
        setLoginError(res.error)
      }
    },
    user,
    loggedIn,
    loginError
  }
}

