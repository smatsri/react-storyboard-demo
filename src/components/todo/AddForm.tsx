import { ignore } from "../../utils/general";
import Form from "../ui/form/Form";
import Input from "../ui/form/Input";
import { useAddForm } from "./AddForm.hook";
import { AddItemRequest } from "./types";

type AddFormProps = {
  onSubmit?(req: AddItemRequest): void
}

const AddForm = ({ onSubmit = ignore }: AddFormProps) => {
  const { submit, register, errors } = useAddForm(onSubmit)

  return (
    <Form onSubmit={(...args) => {
      submit(...args)
    }} vertical={true} >
     
        <Input
          name="title"
          props={register("title")}
          error={errors.title?.message} />
        <div>
          <button type="submit">ADD</button>
        </div>
      
    </Form>
  );
}

export default AddForm;