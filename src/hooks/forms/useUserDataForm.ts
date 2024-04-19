import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  url: yup.string().url().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
export const clearInputsAndOpenModal = (setValue, setModalForm) => {
  setValue("firstname", "");
  setValue("lastname", "");
  setModalForm(true);
};
export const useUserDataForm = () => {
  const defaultValues = {
    url: "https://",
    email: "",
    password: "",
  };
  const {
    watch,
    handleSubmit,
    formState: { errors, isDirty,isValid },
    control,
    setValue,
    getValues,
  } = useForm({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues,
    resolver:yupResolver(schema),
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,

  });
  return {
    watch,
    isDirty,
    defaultValues,
    handleSubmit,
    errors,
    control,
    setValue,
    getValues,
    isValid
  };
};
