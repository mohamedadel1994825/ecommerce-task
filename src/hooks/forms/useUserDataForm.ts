import { useForm } from "react-hook-form";

export const clearInputsAndOpenModal = (setValue, setModalForm) => {
  setValue("firstname", "");
  setValue("lastname", "");
  setModalForm(true);
};

export const useUserDataForm = () => {
  const defaultValues = {
    firstname: "",
    lastname: "",
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues,
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });
  return {
    defaultValues,
    handleSubmit,
    errors,
    control,
    setValue,
    getValues,
  };
};
