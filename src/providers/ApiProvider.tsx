import { createContext, useContext } from "react";
import { IApiService } from "../services/types";

export const ApiService = createContext<IApiService>(null as any);
export const useApiService = () => useContext(ApiService)
