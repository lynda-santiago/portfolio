import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Must Enter A Name"),
  email: yup.string().email().required("Must Enter An Email"),
  message: yup.string().required("Must Enter A Message"),
});
