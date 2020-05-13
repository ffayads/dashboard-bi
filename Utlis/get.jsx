import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import { ContextOne } from '../context/global';
const cookies = new Cookies();

export const getMap = async (data, dispatch) => {
    return await axios.post("/authAdmin/maps/GetReports", {
        "type_reports_id": data
    }).then((response) => {
        let data = response.data;
        if (response.status === 200) {
            return data;
        } else {
            swal("Alerta!", response.statusText, "warning")
            return { data: "" };
        }
    })
}

export const getSearch = async (props = {}) => {
    return await axios.post("/auth/Kpi/GetSearchs", props 
    ).then((response) => {
        let data = response.data;
        if (response.status === 200) {
            return data;
        } else {
            swal("Alerta!", response.statusText, "warning")
            return { data: "" };
        }
    })
}

export const getReports = async (props = {}) => {
    return await axios.post("/authAdmin/search/GetReports", props
    ).then((response) => {
        let data = response.data;
        if (response.status === 200) {
            return data;
        } else {
            swal("Alerta!", response.statusText, "warning")
        }
    })
}

const info = () => {
    return "Utils for query get type ";
}
export default info;