import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import {FlexBox} from "../../styled/styles";
import styled from "styled-components";

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
            onSubmit={handleSubmit(async (formData) => {
                setSubmitting(true);
                setServerErrors([]);

                // const token = await reRef.current.executeAsync();
                // reRef.current.reset();

                const response = await fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        terms: formData.terms,
                        // token,
                    }),
                });
                const data = await response.json();

                if (data.errors) {
                    setServerErrors(data.errors);
                } else {
                    console.log("success, redirect to home page");
                }

                setSubmitting(false);
            })}
        >
            {/*<ReCAPTCHA*/}
            {/*    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}*/}
            {/*    size="invisible"*/}
            {/*    // ref={reRef}*/}
            {/*/>*/}

            {serverErrors && (
                <ul>
                    {serverErrors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <FlexBoxContainerInput z={"column"}  y={"none"}>
                <label htmlFor="firstName">First Name</label>
                <input
                    {...register("firstName", {required: "This is required"})}
                    id="firstName"
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </FlexBoxContainerInput>
            <FlexBoxContainerInput z={"column"}  y={"none"}>
                <label htmlFor="lastName">Last Name</label>
                <input
                    {...register("lastName", {
                        required: "This is required",
                        maxLength: {value: 4, message: "You exceeded the max length"}
                    })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </FlexBoxContainerInput>

            <FlexBoxContainerInput z={"column"} y={"none"}>

                <label htmlFor="email">Email</label>

                <input
                    {...register("email", {
                        required: "This is required",
                        pattern: (value) =>{
                            return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                    pattern.test(value)
                                ) || "must include lower, upper, number, and special chars"
                            );
                        },
                        maxLength: {value: 4, message: "Valid email"}
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </FlexBoxContainerInput>


            <FlexBoxContainerInput z={"column"} y={"none"}>

                <label htmlFor="Password">Password</label>

                <input
                    {...register("email", {
                        required: "This is required",
                        pattern: (value) =>{
                            return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                    pattern.test(value)
                                ) || "must include lower, upper, number, and special chars"
                            );
                        },
                        maxLength: {value: 4, message: "Valid email"}
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </FlexBoxContainerInput>


            <FlexBoxContainerInput  z={"row"} x={"flex-start"}>
                <input
                    type="checkbox"
                    className={"checkbox-input"}
                    {...register("terms",{required:"This is required"})}

                    // type="checkbox"
                    // name="terms"
                    // id="terms"
                    // ref={register({ required: "you must agree to terms" })}
                />
                <label htmlFor="terms" style={{paddingRight:"20px"}}>You must agree to our terms.</label>
            </FlexBoxContainerInput>



            <FlexBoxContainerInput z={"column"}>
                <button type="submit" disabled={submitting}>
                    Register
                </button>
                <p>When you "Continue", you agree to GetTogether's Terms of Service. We will manage information about you as described in our Privacy Policy, and Cookie Policy.</p>
            </FlexBoxContainerInput>

        </form>
    );
}
// width420



const FlexBoxContainerInput = styled(FlexBox)`
  width: 640px;
  padding: 10px;
  .checkbox{
    padding-left: 20px;
  }
  label{
    color: #aba499;
  }
  input{
    padding: 10px 8px;
  }
  p{
    font-size: 10px;
  }
`

