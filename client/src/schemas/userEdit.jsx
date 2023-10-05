import * as Yup from "yup";

const ChangePasswordSchema = Yup.object({
  oldPassword: Yup.string().min(6).required("Please enter your password"),
  newPassword: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("newPassword"), null], "Password does not match"),
});


const ChangeUserInfo = Yup.object({
  name: Yup.string().min(3).max(30).required("Please enter your name"),
  phoneNumber: Yup.string()
    .min(11)
    .max(15)
    .required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email address"),
    age: Yup.number("Please enter numeric value"),
});

const usrEdit = { ChangePasswordSchema, ChangeUserInfo };

export default usrEdit;
