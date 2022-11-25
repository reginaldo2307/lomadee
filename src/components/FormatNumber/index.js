import React from "react";
import numeral from 'numeral';

const FormatNumber = ({ format, children }) => {
    return (
        <span>
            {numeral(children).format(format)}
        </span>
    )
}

export default FormatNumber;