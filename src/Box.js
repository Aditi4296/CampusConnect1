import React from "react";

export default function Box(props){
    const styles={
        backgroundColor:"#73A4D9"
    }
    if(props.id==1 || props.id ==4)
    {
        styles={
            backgroundColor:"#73A4D9"
        }
    }
    return(
        <div style={styles} className="box" >
            box is here
        </div>
    )
}