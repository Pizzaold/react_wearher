import React, { useState } from "react";

const InputNewCity = (props: { onAddCity: any }) => {
    const [enteredCity, setEnteredCity] = useState("");
    const submitHandler = (event: any) => {
        event.preventDefault();
        props.onAddCity(enteredCity);
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" value={enteredCity} onChange={(event) => setEnteredCity(event.target.value)} />
            <button type="submit">Add City</button>
        </form>
    )
}

export default InputNewCity