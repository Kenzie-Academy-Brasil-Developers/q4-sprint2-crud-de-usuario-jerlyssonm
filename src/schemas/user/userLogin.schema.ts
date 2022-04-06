import * as yup from 'yup';

const userLoginShape = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string()
        .required()
        .min(4, 'number of character is 4')
        .max(16, 'number of character is 16')
})

export default userLoginShape