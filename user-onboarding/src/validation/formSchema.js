import * as yup from 'yup';

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'UserName mus be 3 characters long'),
  email: yup
    .string()
    .trim()
    .email('Must be a valid email address')
    .required('Email is required'),
  role: yup
    .string()
    .oneOf(['Student', 'TL','Instructor', 'Alumni','CEO']),
  password:  yup
    .string()
    .trim(),
  
  terms:  yup
    .string()
    .oneOf(['yes', 'no'], 'Terms is required'),
})

export default formSchema


