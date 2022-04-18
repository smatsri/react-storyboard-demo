import { IApiService } from "../services/types"


export const useApi = (): IApiService => {

  return {
    login(req) {
      return new Promise(res => {
        if(req.username === "tester") {
          res({
            success: true, 
            user: { username: "tester" }
          })
        } else {
          res({
            success: false, 
            error: "NotFound"
          })
        }
        
      })
    }
  }
}

