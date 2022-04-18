import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Form from "./form/Form"
import Input from "./form/Input"
import "./LoginForm/style.css"

type Data = {
  username: string
  password: string
}

const ignore = () => { }

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
}).required();

interface LoginFormProps extends Partial<Data> {
  title: string,
  logginError?: string
  onSubmit?(data: any): void
}
const LoginForm = ({ title, onSubmit = ignore, username, password }: LoginFormProps) => {
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

  }, [username, password])

  return (
    <div>
      <div className="title">{title}</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input name="username"
          props={register("username")}
          error={errors.username?.message} />
        <Input name="password"
          type="password"
          props={register("password")}
          error={errors.password?.message} />
        <button type="submit">SEND</button>
      </Form>
    </div>
  )
}

export default LoginForm;