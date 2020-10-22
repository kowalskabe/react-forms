import React from 'react';
import { useForm} from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";

function ReactHookForm() {

    const { register, errors, handleSubmit, getValues, formState, reset} =useForm({
        validateCriteriaMode: "all",
        mode: "onChange"
    });

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
    };

    return (
        <div>
            <h3>React Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" name="username" type="text"
                           ref={register({
                               required: "Username is required",
                               maxLength:{
                                   value: 15,
                                   message: "Username should be between 6 and 15 characters"
                               },
                               minLength:{
                                   value: 6,
                                   message: "Username should be between 6 and 15 characters"
                               }
                           })}
                    />
                    <ErrorMessage errors={errors} name="username">
                        {( messages ) =>
                            messages &&
                            Object.entries(messages).map(([type,message]) =>(
                                <p className="help-block text-danger" key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" name="email" type="email"
                            ref={register({
                               required: "Email is required",
                               pattern: {
                                   value: /^[^\s@]+@[^\s]+\.[^s@]+$/i,
                                   message: "Invalid email address"
                               }
                           })}
                    />
                    <ErrorMessage errors={errors} name="email">
                        {( messages ) =>
                            messages &&
                            Object.entries(messages).map(([type,message]) =>(
                                <p className="help-block text-danger" key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type="password"
                        ref={register({
                            required: "Password is required",
                            minLength:{
                                value: 8,
                                message: "Password should have at least 8 characters"
                            }
                        })}
                    />
                    <ErrorMessage errors={errors} name="password">
                        {( messages ) =>
                            messages &&
                            Object.entries(messages).map(([type,message]) =>(
                                <p className="help-block text-danger" key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                </div>

                {/* Password confirmation */}
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input className="form-control" name="confirmPassword" type="password"
                        ref={register({
                            required: "Please confirm your password",
                            validate: value => {
                                if(value === getValues()["password"]){
                                    return true;
                                } else {
                                    return "The passwords do not match";
                                }
                            }
                        })}/>
                        <ErrorMessage errors={errors} name="confirmPassword">
                        {( messages ) =>
                            messages &&
                            Object.entries(messages).map(([type,message]) =>(
                                <p className="help-block text-danger" key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                </div>

                {/* Buttons */}
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <div className="btn-group btn-group-lg py-3 align-self-center" id="divwithbtns">
                            <button className="btn btn-primary" type="submit" disabled={!formState.isValid}>Submit</button>
                            <button className="btn btn-danger" type="button" onClick={() => reset()}>Reset</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}


export default ReactHookForm;