import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './App.css';

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

    const submitButtonHandler = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className="Form">
                <div className="title">Candidate Registration Form</div>
                <hr />
                <div className="inputs">

                    <form onSubmit={handleSubmit(submitButtonHandler)}>
                        <div className="form-control">
                            <input {...register("firstName")} placeholder="First Name" />
                            {errors.firstName && <span className="errorText">{errors.firstName.message}</span>}
                        </div>

                        <div className="form-control">
                            <input {...register("lastName")} placeholder="Last Name" />
                            {errors.lastName && <span className="errorText">{errors.lastName.message}</span>}
                        </div>

                        <div className="form-control">
                            <input {...register("email")} placeholder="Email" />
                            {errors.email && <span className="errorText">{errors.email.message}</span>}
                        </div>

                        <div className="form-control">
                            <input {...register("website")} placeholder="Website" />
                            {errors.website && <span className="errorText">{errors.website.message}</span>}
                        </div>

                        <div className="form-control">
                            <input {...register("age")} placeholder="Age" />
                            {errors.age && <span className="errorText">Age is required.</span>}
                        </div>

                        <div className="form-control">
                            <input type="password" {...register("password")} placeholder="Password" />
                            {errors.password && <span className="errorText">{errors.password.message}</span>}
                        </div>

                        <div className="form-control">
                            <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" />
                            {errors.confirmPassword && <span className="errorText">Passwords do not match.</span>}
                        </div>

                        <hr />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SampleForm;