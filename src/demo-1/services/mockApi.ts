import { IApiService } from "./types"


const mockApi = (): IApiService => {

  return {
    login(req) {
      return new Promise(res => {
        if (req.username === "tester") {
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

export default mockApi;

