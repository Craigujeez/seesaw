import React,{useState} from 'react';
import PropTypes from "prop-types";

const CustomInputComponent = (props) => {
    const { title, type, touched, error, value,name } = props;

    return ( 
        <div className="form-control mt-4 box-border">
            <input
                {...props}
                autoComplete="new-password"
                placeholder={`${type === "tel" ? title : ""}`}
                type={type}
                value={value}
                className="input--field"
                disabled=""
            />
            <span>
                {name ==="email" ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M1.72764 6.28795C1.95534 6.44863 2.64171 6.92583 3.78677 7.71933C4.93188 8.51282 5.8091 9.12379 6.41849 9.55227C6.48544 9.59924 6.62768 9.70134 6.84528 9.85871C7.06292 10.0162 7.24375 10.1434 7.38765 10.2405C7.53165 10.3375 7.70573 10.4464 7.91006 10.5669C8.11433 10.6873 8.30688 10.7778 8.48768 10.8378C8.66852 10.8982 8.83591 10.9282 8.9899 10.9282H9H9.01013C9.16412 10.9282 9.33159 10.8982 9.51242 10.8378C9.69315 10.7778 9.88588 10.6872 10.09 10.5669C10.2942 10.4462 10.4682 10.3375 10.6122 10.2405C10.7562 10.1434 10.9369 10.0162 11.1546 9.85871C11.3722 9.7012 11.5146 9.59924 11.5816 9.55227C12.1975 9.12379 13.7647 8.03558 16.2824 6.28774C16.7712 5.94637 17.1796 5.53446 17.5077 5.05229C17.836 4.57033 18 4.06473 18 3.53577C18 3.09374 17.8409 2.71536 17.5228 2.40066C17.2047 2.08589 16.8279 1.92859 16.3928 1.92859H1.60708C1.09148 1.92859 0.694703 2.10267 0.416801 2.45083C0.138934 2.79906 0 3.23433 0 3.75661C0 4.17847 0.184213 4.63563 0.552462 5.12779C0.920676 5.61998 1.31253 6.00674 1.72764 6.28795Z" fill="#A2ADB8"/>
                        <path d="M16.9954 7.36262C14.7992 8.84909 13.1316 10.0043 11.9933 10.8281C11.6116 11.1092 11.302 11.3287 11.0642 11.4859C10.8264 11.6433 10.5102 11.804 10.115 11.968C9.71998 12.1322 9.35184 12.2141 9.01026 12.2141H9.00002H8.98992C8.64841 12.2141 8.28006 12.1322 7.88504 11.968C7.49001 11.804 7.17355 11.6433 6.93583 11.4859C6.69818 11.3287 6.38843 11.1092 6.00678 10.8281C5.10271 10.1652 3.43868 9.00987 1.01461 7.36262C0.632817 7.10832 0.294648 6.81684 0 6.48877V14.464C0 14.9062 0.157298 15.2844 0.472071 15.5991C0.786773 15.914 1.16519 16.0713 1.60718 16.0713H16.3929C16.8348 16.0713 17.2132 15.914 17.5279 15.5991C17.8428 15.2843 18 14.9063 18 14.464V6.48877C17.712 6.81005 17.3773 7.10153 16.9954 7.36262Z" fill="#A2ADB8"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                ) : name === "password" ?  (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0833 7.5H15.8333V5.83332C15.8333 2.6168 13.2166 0 10 0C6.78344 0 4.16668 2.6168 4.16668 5.83332V7.5H2.91668C2.68637 7.5 2.5 7.68637 2.5 7.91668V18.3334C2.5 19.2525 3.24746 20 4.16668 20H15.8334C16.7525 20 17.5 19.2525 17.5 18.3333V7.91668C17.5 7.68637 17.3136 7.5 17.0833 7.5ZM11.2476 16.204C11.2606 16.3216 11.2228 16.4396 11.1438 16.5279C11.0649 16.6162 10.9518 16.6667 10.8334 16.6667H9.16668C9.04828 16.6667 8.93516 16.6162 8.85621 16.5279C8.77727 16.4396 8.73941 16.3216 8.75246 16.204L9.01531 13.8404C8.58848 13.5299 8.33336 13.0387 8.33336 12.5C8.33336 11.5808 9.08082 10.8333 10 10.8333C10.9193 10.8333 11.6667 11.5808 11.6667 12.5C11.6667 13.0387 11.4116 13.5299 10.9848 13.8404L11.2476 16.204ZM13.3333 7.5H6.66668V5.83332C6.66668 3.99535 8.16203 2.5 10 2.5C11.838 2.5 13.3333 3.99535 13.3333 5.83332V7.5Z" fill="#A2ADB8"/>
                    </svg>
                ) : null}
            </span>
            <label id={name} htmlFor={props.title}>
                {props.title}
            </label>
            {touched && error && (
                <small
                id={error}
                className="form-control text-red-600"
                >
                {error}
                </small>
            )}
        </div>
     );
}

CustomInputComponent.propTypes = {
    /**
     * To check for errors
     */
    // label: PropTypes.string.isRequired,
    /**
     * To check for errors
     */
    error: PropTypes.string,
    /**
     * To check for errors
     */
    /**
     * Input types
     */
    type: PropTypes.oneOf(["text", "password", "number", "tel"]).isRequired,
    /**
     * reference to other fuction
     */
    // onChange: PropTypes.func,
    /**
     * Onleydown
     */
    onKeyDown: PropTypes.func
  };
 
export default CustomInputComponent;