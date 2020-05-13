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
            console.log(response);
            let token = 'Bearer '.concat(data.token);
            cookies.set("Token", token, { expires: new Date(data.expire) });
            axios.defaults.headers.get['Authorization'] = token;
            axios.defaults.headers.post['Authorization'] = token;
            dispatch({ type: "start-load" })
        } else {
            swal("Alerta!", response.statusText, "warning")
        }
    }).catch(function (error) {
        swal("Algo inesperado paso!", "Intenta mas tarde", "warning")
    })
}

const info = () => {
    return "Utils for query get type ";
}
export default info;