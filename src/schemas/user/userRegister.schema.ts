import * as yup from 'yup';

const userRegiterShape = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string()
        .required()
        .min(4, 'number of character is 4')
        .max(16, 'number of character is 16'),
    isAdm: yup.boolean().optional(),
})

export default userRegiterShape