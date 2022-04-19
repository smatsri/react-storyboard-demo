import Form from "../ui/form/Form";
import Input from "../ui/form/Input";
import { useAddForm } from "./AddForm.hook";
import { AddItemRequest } from "./types";

type AddFormProps = {
  onSubmit(req: AddItemRequest): void
}

const AddForm = ({ onSubmit }: AddFormProps) => {
  const { submit, register, errors } = useAddForm(onSubmit)
  console.log(errors.title?.message);
  
  return (
    <Form onSubmit={(...args) => {
      submit(...args)
    }}>
      <div style={{ display: "flex" }}>
        <Input 
          name="title" 
          props={register("title")} 
          error={errors.title?.message} />
        <button type="submit">ADD</button>
      </div>
    </Form>
  );
}

export default AddForm;