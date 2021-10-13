import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import {FlexBox} from "../../styled/styles";

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
            <FlexBox z={"column"}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    {...register("firstName", {required: "This is required"})}
                    id="firstName"
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </FlexBox>
            <FlexBox z={"column"}>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    {...register("lastName", {
                        required: "This is required",
                        maxLength: {value: 4, message: "You exceeded the max length"}
                    })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </FlexBox>

            <FlexBox z={"column"}>
                <label htmlFor="email">Email:</label>
                <input
                    {...register("email", {
                        required: "This is required",
                        pattern:
                        maxLength: {value: 4, message: "Valid email"}
                    })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </FlexBox>

        </form>
    );
}

