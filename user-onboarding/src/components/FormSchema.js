import * as yup from 'yup'

export const schema = yup.object().shape({
    user: yup.string().required('user is required').min(6, 'user needs to be 6 characters min'),
    email: yup.string().required('email required').min(6, 'email needs to be 6 characters min'),
    password: yup.string().required('password is required').min(6, 'password needs to be 6 characters min'),
    agree: yup.boolean().oneOf([true], 'you must accept terms of service')
})

