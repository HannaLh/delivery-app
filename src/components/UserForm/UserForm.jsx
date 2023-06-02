import { useState } from "react";
import "./UserForm.css";

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="form-input">
            <label className="form-input__label">{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
                className="form-input__field"
            />
            <span className="form-input__error-message">{errorMessage}</span>
        </div>
    );
};

export default FormInput;