# react-hook-form validation using yup library

Validating user inputs on forms is one of the most important things to do. There are many libraries with offer solutions for handling forms but have a huge boilerplate, which is sometimes scary.

**React Hook forms** is a great library used for form handling. You can learn more about it [here](https://angular-evan.medium.com/yup-you-should-use-react-hook-form-9864d8bc80ef).

**Yup** is simple library which helps you with the validation. You just have to define the schema as per your needs and add it as a resolver in RHF's useform function as follows.

```javascript
const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string().required("Last Name is required."),
    email: yup.string().email().required("Email Id is required."),
    website: yup.string().url().required("Please enter the address of your Website."),
    age: yup.number().positive().integer().required("Age is required."),
    password: yup.string().min(4).max(15).required("Please enter your password."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const SampleForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    
    ...
}
```


In this code, I have added a simple form which has a validation set for the form inputs. In order to integrate RHF and YUP, you need to install following packages.

``` npm install react-hook-form yup @hookform/resolvers ```


