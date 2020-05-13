import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { ContextOne } from '../context/global';
const cookies = new Cookies();

export const Login = (data, dispatch) => {
    axios.post("/login", {
        "email": data.email,
        "password": data.password,
        "role": "1",
    }).then((response) => {
        if (response !== undefined && response.status === 200) {
            let token = 'Bearer '.concat(response.data.token);
            cookies.set("Token", token);
            dispatch({ type: "stop-load" });
        } else {
            swal("Alerta!", "Usuario/contraseña incorrectos", "warning")
        }
    })
}

export const refreshToken = (data, dispatch) => {
    axios.get("/auth/refresh_token", {
    }).then((response) => {
        if (response.status === 200) {
            let token = 'Bearer '.concat(data.token);
            cookies.set("Token", token);
            axios.defaults.headers.get['Authorization'] = token;
            axios.defaults.headers.post['Authorization'] = token;
        }
    })
}

const info = () => {
    return "Utils for query get type ";
}
export default info;