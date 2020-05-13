import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Button } from 'reactstrap';

const Actions = (props) => {
    return (
        <div className="actions-right">
            <Button
                onClick={() => { props.setOpenModal({ flag: true, id: props.data }); }}
                color="info"
                size="sm"
                className="btn-icon btn-round"
            >
                <i className="tim-icons icon-alert-circle-exc" />
            </Button>
        </div >
    )
}

export const getData = async (props) => {
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour12: "false" };
    axios.get("authAdmin/reports/GetReports", {
        id: "",
    }).then((response) => {
        if (response.status) {
            let data = [];
            response.data.data.Reports.map((elem) => {
                elem['StatusId'] = elem.Status;
                switch (elem.Status) {
                    case 0:
                        elem['Status'] = "PENDIENTE";
                        break;
                    case 1:
                        elem['Status'] = "APROBADO";
                        break;
                    case 2:
                        elem['Status'] = "RECHAZADO";
                        break;
                    case 3:
                        elem['Status'] = "FINALIZADO";
                        break;
                }
                elem['Date'] = new Date(elem.Time).toLocaleDateString("es-CO", options);
                elem['actions'] = Actions({ setOpenModal: props.setOpenModal, data: elem.ID })
                data.push(elem);
            });
            props.setData(data);
        } else {
            swal(response.msg, "", "warning");
        }
    })
}

export const RechazaS = (data, setData) => {
    swal({
        title: "Esta seguro?",
        text: "Esta por rechazar una solicitud",
        icon: "warning",
        buttons: ["Cancelar!", "Si, Rechazar!"],
    }).then((flag) => {
        if (flag === true) {
            axios.post("authAdmin/reports/UpdateReports", {
                id: data.id,
                nota: data.nota,
                status: 2
            }).then(function (response) {
                swal("Exito!", "Se rechazo la solicitud", "success");
                setData([])
            })
        }
    });
}


export const ApruebaS = (data, setData) => {
    swal({
        title: "Esta seguro?",
        text: "Esta por aceptar una solicitud",
        icon: "warning",
        buttons: ["Cancelar!", "Si, Aceptar!"],
    }).then((flag) => {
        if (flag === true) {
            axios.post("authAdmin/reports/UpdateReports", {
                id: data.id,
                nota: data.nota,
                status: 1
            }).then(function (response) {
                console.log(response);
                swal("Exito!", "Se rechazo la solicitud", "success");
                setData([]);
            })
        }
    });
}

export const FinalizaS = (data, setData) => {
    swal({
        title: "Esta seguro?",
        text: "Esta por Finalizar una solicitud",
        icon: "warning",
        buttons: ["Cancelar!", "Si, Finalizar!"],
    }).then((flag) => {
        if (flag === true) {
            axios.post("authAdmin/reports/UpdateReports", {
                id: data.id,
                nota: data.nota,
                status: 1
            }).then(function (response) {
                console.log(response);
                swal("Exito!", "Se rechazo la solicitud", "success");
                setData([]);
            })
        }
    });
}

const Data = () =>{
    return(
        "Data"
    )
}

export default Data;

