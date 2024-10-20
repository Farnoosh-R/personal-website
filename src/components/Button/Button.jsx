import React from "react";
import './style.scss'

const Button = ({title, type="primary"}) => {
    return(
        <button className={`Button Button--${type}`}>{title}</button>
    )
}
export default Button
