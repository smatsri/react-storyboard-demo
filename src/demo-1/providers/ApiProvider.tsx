import { createContext, useContext } from "react";
import { IApiService } from "../services/types";

export const ApiService = createContext<IApiService>(null as any);
ApiService.displayName = "ApiService";
export const useApiService = () => useContext(ApiService)
