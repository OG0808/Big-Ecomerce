import * as yup from "yup";

export const validationSchema = yup.object({
  Name: yup.string().required("First Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone_number: yup.string() 
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number") 
    .required("Number is required"),
  ZipCode: yup.number()
    .typeError("Must be a number")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .required("This field is required"),
  City: yup.string().required("The city is required"),
  Country: yup.string().required("The countrie is required"),
  address: yup.string().required("Direction is requirement"),
  e__moneyNumber: yup.number()
    .typeError("Must be a number")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .required("This field is required"),
  e__moneyPing: yup.number()
    .typeError("Must be a number")
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .required("This field is required"),
});
