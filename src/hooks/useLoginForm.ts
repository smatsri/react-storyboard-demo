import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
}).required();

export const useLoginForm = (username?: string, password?: string, onSubmit?: any) => {
  const init = useRef(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    trigger } =
    useForm({
      defaultValues: { username, password },
      resolver: yupResolver(schema)
    });

  useEffect(() => {
    if (!init.current) {
      init.current = true
    } else {
      reset({ username, password })
      trigger()
    }

  }, [username, password]);

  return {
    onSumbit: handleSubmit(onSubmit),
    register,
    errors
  }
}