import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import {FlexBox} from "../../styled/styles";
import styled from "styled-components";
import {FlexBoxContainerInput} from "../../styled/input";



export default function SignUpForm() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const [submitting, setSubmitting] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);
    // const reRef = useRef<ReCAPTCHA>();


    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
            // onSubmit={handleSubmit( (formData) => {
            // console.log(formData)
            // setSubmitting(true);
            // setServerErrors([]);
            //
            // // const token = await reRef.current.executeAsync();
            // // reRef.current.reset();
            // let body = JSON.stringify({
            //     name: formData.name,
            //     email: formData.email,
            //     password: formData.password,
            //     terms: formData.terms,
            //     // token,
            // })
            // console.log(body)
            // const response = await fetch("/api/user/register", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body,
            // });
            // const data = await response.json();

            // if (data.errors) {
            //     setServerErrors(data.errors);
            // } else {
            //     console.log("success, redirect to home page");
            // }
            //
            // setSubmitting(false);
            // })}
        >
            {/*<ReCAPTCHA*/}
            {/*    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}*/}
            {/*    size="invisible"*/}
            {/*    // ref={reRef}*/}
            {/*/>*/}
            <FlexBoxContainerInput>
                {serverErrors && (
                    <ul>
                        {serverErrors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
            </FlexBoxContainerInput>
            <FlexBoxContainerInput z={"column"} y={"none"}>
                <label htmlFor="firstName">First Name</label>
                <input
                    {...register("firstName", {required: "This is required"})}
                    id="firstName"
                />
                {errors.firstName && <p className={"error"}>{errors.firstName.message}</p>}
            </FlexBoxContainerInput>
            <FlexBoxContainerInput z={"column"} y={"none"}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    {...register("lastName", {
                        required: "This is required",
                        maxLength: {value: 16, message: "You exceeded the max length"}
                    })}
                />
                {errors.lastName && <p className={"error"}>{errors.lastName.message}</p>}
            </FlexBoxContainerInput>

            <FlexBoxContainerInput z={"column"} y={"none"}>

                <label htmlFor="email">Email</label>

                <input

                    {...register("email", {
                        required: "This is required",
                        pattern: (value) => {
                            return (
                                new RegExp("^[^@\\s]+@[^@\\s\\.]+\\.[^@\\.\\s]+$").test(value)
                            );
                        },
                        minLength: {value: 6, message: "Valid email"}
                    })}
                />
                {errors.email && <p className={"error"}>{errors.email.message}</p>}
            </FlexBoxContainerInput>

            <FlexBoxContainerInput z={"column"} y={"none"}>

                <label htmlFor="password">Password</label>

                <input
                    type={"password"}
                    {...register("password", {
                        required: "This is required",
                        minLength: {
                            value: 8,
                            message: "must be 8 chars",
                        },
                        validate: (value) => {
                            return !([/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                    pattern.test(value)
                                ) || "must include lower, upper, number, and special chars"
                            );
                        },
                    })}
                />
                {errors.password && <p className={"error"}>{errors.password.message}</p>}
            </FlexBoxContainerInput>


            {/*<FlexBoxContainerInput z={"row"} x={"flex-start"}>*/}
            {/*    <input*/}
            {/*        type="checkbox"*/}
            {/*        className={"checkbox-input"}*/}
            {/*        {...register("terms", {required: "This is required"})}*/}

            {/*        // type="checkbox"*/}
            {/*        // name="terms"*/}
            {/*        // id="terms"*/}
            {/*        // ref={register({ required: "you must agree to terms" })}*/}
            {/*    />*/}
            {/*    <label htmlFor="terms" style={{paddingLeft: "20px"}}>You must agree to our terms.</label>*/}
            {/*</FlexBoxContainerInput>*/}
            {/*{errors.terms && <p className={"error"}>{errors.terms.message}</p>}*/}

            <FlexBoxContainerInput z={"column"}>
                <button type="submit" className={"submit-auth-btn"}>
                    Register
                </button>
                <p>When you "Continue", you agree to GetTogether's Terms of Service. We will manage information about
                    you as described in our Privacy Policy, and Cookie Policy.</p>
            </FlexBoxContainerInput>

        </form>
    );
}
// width420




