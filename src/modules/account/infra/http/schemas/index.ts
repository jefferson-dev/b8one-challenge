import * as yup from 'yup';

export const CreateAccountSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const UpdateAccountSchema = yup.object().shape({
  name: yup.string(),
  age: yup.number(),
  email: yup.string().email(),
  password: yup.string().min(6),
});
