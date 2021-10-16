import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";
import {FlexBoxContainerInput} from "../../styled/input";

const LoginForm = props => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const [submitting, setSubmitting] = useState(false);
    const [serverErrors, setServerErrors] = useState([]);

    return (
       <form onSubmit={handleSubmit((data) =>{
           console.log(data)
       })}>
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

           <FlexBoxContainerInput z={"column"}>
               <button type="submit" className={"submit-auth-btn"}>
                   Login
               </button>
           </FlexBoxContainerInput>
       </form>
    );
};

LoginForm.propTypes = {
    
};

export default LoginForm;
