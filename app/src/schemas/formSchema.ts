import * as yup from 'yup';

export const rideFormSchema = yup.object().shape({
  from: yup.string().required('From location is required*'),
  to: yup.string().required('To location is required*'),
  message: yup.string().required('Message is required*'),
  role: yup.string().required('Role is required*'),
});
