import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
const cookies = new Cookies();

export const Login = (data, dispatch) => {
    axios.post("/login", {
        "email": data.email,
        "password": data.password,
        "role": "1",
    }).then((response) => {
        let data = response.data;
        if (response.status === 200) {
            let token = 'Bearer '.concat(data.token);
            cookies.set("Token", token, { expires: new Date(data.expire) });
            dispatch({ type: "stop-load" });
        } else {
            swal("Alerta!", response.statusText, "warning")
        }
    })
}

const info = () => {
    return ""
}
export default info;