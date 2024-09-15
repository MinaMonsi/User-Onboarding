import React from "react";

export default function Users(props){
    return(
        <div>
            {props.users.map(newUser => {
            return(
                <div>
                    <h2>{newUser.user}</h2>
                </div>
            )
        })}
        </div>
    )
}
        