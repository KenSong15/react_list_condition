import React from "react";
const Char = props => {
    const style = {
        dusplay: "inline-block",
        padding: "16px",
        margin: "16px",
        border: "1px solid black",
        textAlign: "center"
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};
export default Char;
