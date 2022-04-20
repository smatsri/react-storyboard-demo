import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormData = {
  title: string
}

const schema = yup.object({
  title: yup.string().required()
}).required();

export const useAddForm = (onSubmit:any) => {
  const {
    register,
    formState: { errors },
    handleSubmit} =
    useForm<FormData>({
      defaultValues: {  
        title:"asd"
      },
      resolver: yupResolver(schema)
    });

  return {
    submit: handleSubmit(onSubmit),
    register,
    errors
  }
}