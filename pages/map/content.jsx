import React from 'react';
import { Card, CardTitle, CardBody, Row, Col, CardHeader, Button, Form } from 'reactstrap';
import { Marker, InfoWindow } from 'google-maps-react';
import Select from "react-select";
import Maps from '../../components/Maps/map';
import { getMap } from '../../Utlis/get';
import Modal from '../../components/Modal/modal';
import { orientation, multiSelectType } from '../../variables/varGeneral';

const content = (props) => {
    const [data, setData] = React.useState({
        center: { lat: 4.3364601, lng: -74.3637772 },
        zoom: 11,
    });
    const initialCenter = { lat: 4.3364601, lng: -74.3637772 };
    const [modal, setModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState(false);
    const [multipleSelect, setMultipleSelect] = React.useState(multiSelectType());

    React.useEffect(() => {
        let query = [];
        if (multipleSelect !== null) {
            multipleSelect.map((e) => {
                query.push(parseInt(e.value))
            });
        }
        getMap(query).then((response) => {
            if (response !== undefined) {
                if (response.status) {
                    setData({ ...data, marks: response.data.reports });
                } else {
                    setData({ ...data, marks: [] });
                }
            }
        })
    }, [multipleSelect]);

    React.useEffect(() => {
        if (!modalInfo) setData({ ...data, zoom: 9, center: initialCenter })
    }, [modalInfo])

    const onMarkerClick = (props, marker, e) => {
        setData({
            ...data,
            dataInfo: props,
            center: { lat: props.data.Lat, lng: props.data.Lon },
            zoom: 18,
        });
        setModal(false);
        setModalInfo(true);
    }

    const getContent = () => {
        if (data.marks !== undefined) {
            return data.marks.map((elem, i) => {
                let options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour12: "false" };
                elem['Date'] = new Date(elem.Time).toLocaleDateString("es-CO", options);
                elem['Hour'] = new Date(elem.Time).getUTCHours() + ":" + new Date(elem.Time).getUTCMinutes();
                return (
                    <Marker
                        key={"mark_" + i}
                        onClick={onMarkerClick}
                        data={elem}
                        position={{ lat: elem.Lat, lng: elem.Lon }}
                        className="tim-icons icon-alert-circle-exc"
                        icon={{
                            //url: "/img/reports/1.jpg",
                            url: "/img/reports/" + elem.TypeReportID + ".jpg",
                            anchor: { x: 12, y: 12 },
                            scaledSize: { width: 30, height: 30, i: undefined, g: undefined }
                        }}
                    />
                )
            })
        }
    }

    const getModal = () => {
        if (modal) {
            return data.marks.map((elem, i) => {
                return (
                    <Row key={"row_" + i}>
                        <Col xs={6} key={"head_e_" + i}>
                            {elem.TypeReport}
                        </Col>
                        <Col xs={6} key={"body_e_" + i}>
                            <Button
                                key={"buton_e_" + i}
                                color="info"
                                className="animation-on-hover"
                                onClick={(e) => {
                                    onMarkerClick(
                                        {
                                            data: elem,
                                            position: { lat: elem.Lat, lng: elem.Lon }
                                        }
                                    )
                                }}
                            >
                                {"Ver"}
                            </Button>
                        </Col>
                    </Row>
                )
            })
        }
    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                {/* <CardTitle>Mapa</CardTitle> */}
                                <Row>
                                    <Col >
                                        <Button color="info" className="animation-on-hover" onClick={() => { setModal(true) }}>Lista Eventos</Button>
                                    </Col>
                                    <Col sm={9}>
                                        <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            placeholder="Tipo de reporte"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={multipleSelect}
                                            onChange={value => setMultipleSelect(value)}
                                            options={multiSelectType()}
                                        />
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody id={"map"} style={{ position: "relative", overflow: "hidden" }} >
                                <Maps
                                    initialCenter={initialCenter}
                                    center={data.center}
                                    zoom={data.zoom} >
                                    {getContent()}
                                </Maps>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal modal={modal} setModal={setModal} title={"Lista de eventos"} key={"modal_1"}>
                    {getModal()}
                </Modal>
                <Modal modal={modalInfo} setModal={setModalInfo} title={modalInfo ? "Evento  " + data.dataInfo.data.TypeReport : "Evento ..."} Draggable={true} key={"modal_2"}>
                    {modalInfo ?
                        <div >
                            {data.dataInfo.data.Image !== "" ?
                                <img src={data.dataInfo.data.Image} alt={"..."} style={{ width: "100%" }} />
                                : "Sin imagen para mostrar."
                            }
                            <p><b>Fecha: </b>{data.dataInfo.data.Date}</p>
                            <p><b>Hora :</b> {data.dataInfo.data.Hour} - (24 Horas)</p>
                            <p><b>Sentido :</b> {orientation[data.dataInfo.data.Orientation]}</p>
                            <p><b>Latitud: </b>{data.dataInfo.data.Lat}  - <b>Longitud: </b>{data.dataInfo.data.Lon}</p>
                        </div>
                        : <p>...</p>}
                </Modal>
            </div>
        </>
    )
}
export default content;
