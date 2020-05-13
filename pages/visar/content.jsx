import React from 'react';
import ReactTable from 'react-table-v6';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, FormGroup, Label, Input, Nav, NavItem, NavLink, TabPane, TabContent, Badge } from 'reactstrap';
import PersonalModal from '../../components/Modal/modal';
import { useForm, Controller } from "react-hook-form";
import { getData, ApruebaS, RechazaS } from './function';

const content = (props) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [option, setOption] = React.useState("");
    const { handleSubmit, errors, control, reset } = useForm();
    const { handleSubmit: handleSubmit2, errors: errors2, control: control2, reset: reset2 } = useForm();
    const { handleSubmit: handleSubmit3, errors: errors3, control: control3, reset: reset3 } = useForm();
    const Aprueba = data => ApruebaS(data, setData);
    const Rechaza = data => RechazaS(data, setData);
    const Finaliza = data => FinalizaS(data, setData);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        if (data.length === 0) {
            getData({ setData, setOpenModal });
        }
        setOpenModal(false);
    }, [data])

    React.useEffect(() => {
        if (openModal.id === undefined) {
            reset();
            reset2();
            reset3();
            setOption("");
        }
    }, [openModal])

    const modalAction = () => {
        let dato = data.filter(elem => elem.ID === openModal.id)[0];
        if (dato === undefined) return ""
        return (
            <PersonalModal modal={openModal.flag} setModal={setOpenModal} title={"Acciones para la solicitud No. " + dato.ID} size='lg'>
                <Row>
                    <Col sm={4}>
                        <Nav pills className="nav-pills-primary flex-column">
                            {
                                dato.StatusId !== 1 ?
                                    <>
                                        <NavItem>
                                            <NavLink
                                                className={option === "ht1" ? "active" : ""}
                                                style={{ background: option === "ht1" ? "green" : "" }}
                                                onClick={() => setOption("ht1")}
                                            >
                                                {"Aprobar"}
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={option === "ht2" ? "active" : ""}
                                                style={{ background: option === "ht2" ? "red" : "" }}
                                                onClick={() => setOption("ht2")}
                                            >
                                                {"Rechazar"}
                                            </NavLink>
                                        </NavItem>
                                    </>
                                    : ""
                            }
                            {
                                dato.StatusId === 1 ?
                                    <NavItem>
                                        <NavLink
                                            className={option === "ht3" ? "active" : ""}
                                            style={{ background: option === "ht3" ? "#ff9900" : "" }}
                                            onClick={() => setOption("ht3")}
                                        >
                                            {"Finalizar"}
                                        </NavLink>
                                    </NavItem>
                                    : ""
                            }
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <TabContent activeTab={option} className="tab-space">
                            <TabPane tabId="ht1">
                                <Col sm={12} style={{ color: "black" }}>
                                    <p> <b>{"Fecha : "}</b>{dato.Date}</p>
                                </Col>
                                <Col sm={12}>
                                    <form onSubmit={handleSubmit(Aprueba)}>
                                        <FormGroup>
                                            <Label for="nota" style={{ color: "black" }}>Nota :</Label>
                                            {errors.nota1 && <Badge color="warning" pill>El campo es requerido</Badge>}
                                            <Controller
                                                as={Input}
                                                control={control}
                                                type="hidden"
                                                name="id"
                                                defaultValue={dato.ID}
                                            />
                                            <Controller
                                                as={Input}
                                                control={control}
                                                type="textarea"
                                                name="nota1"
                                                placeholder="Nota"
                                                autoComplete="off"
                                                rules={{
                                                    required: true
                                                }}
                                                defaultValue=""
                                            />
                                            <center>
                                                <Button type="submit" className="btn-round" color="success" size="lg" style={{ background: "green" }} >
                                                    {"Aprobar"}
                                                </Button>
                                            </center>
                                        </FormGroup>
                                    </form>
                                </Col>
                            </TabPane>
                            <TabPane tabId="ht2">
                                <Col sm={12} style={{ color: "black" }}>
                                    <p> <b>{"Fecha : "}</b>{dato.Date}</p>
                                </Col>
                                <Col sm={12}>
                                    <form onSubmit={handleSubmit2(Rechaza)}>
                                        <FormGroup>
                                            <Label for="nota" style={{ color: "black" }}>Nota :</Label>
                                            {errors2.nota2 && <Badge color="warning" pill>El campo es requerido</Badge>}
                                            <Controller
                                                as={Input}
                                                control={control2}
                                                type="hidden"
                                                name="id"
                                                defaultValue={openModal.id}
                                            />
                                            <Controller
                                                as={Input}
                                                control={control2}
                                                type="textarea"
                                                name="nota2"
                                                placeholder="Nota"
                                                autoComplete="off"
                                                rules={{
                                                    required: true
                                                }}
                                                defaultValue=""
                                            />
                                            <center>
                                                <Button type="submit" className="btn-round" color="danger" size="lg" >
                                                    {"Rechazar"}
                                                </Button>
                                            </center>
                                        </FormGroup>
                                    </form>
                                </Col>
                            </TabPane>
                            <TabPane tabId="ht3">
                                <Col sm={12} style={{ color: "black" }}>
                                    <p> <b>{"Fecha : "}</b>{dato.Date}</p>
                                </Col>
                                <Col sm={12}>
                                    <form onSubmit={handleSubmit3(Finaliza)}>
                                        <FormGroup>
                                            <Label for="nota" style={{ color: "black" }}>Nota :</Label>
                                            {errors3.nota3 && <Badge color="warning" pill>El campo es requerido</Badge>}
                                            <Controller
                                                as={Input}
                                                control={control3}
                                                type="hidden"
                                                name="id"
                                                defaultValue={dato.id}
                                            />
                                            <Controller
                                                as={Input}
                                                control={control3}
                                                type="textarea"
                                                name="nota3"
                                                placeholder="Nota"
                                                autoComplete="off"
                                                rules={{
                                                    required: true
                                                }}
                                                defaultValue=""
                                            />
                                            <center>
                                                <Button type="submit" className="btn-round" style={{ background: "#ff9900" }} size="lg" >
                                                    {"Finalizar"}
                                                </Button>
                                            </center>
                                        </FormGroup>
                                    </form>
                                </Col>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </PersonalModal>
        )
    }

    const columns = [
        {
            Header: 'Numero',
            accessor: 'ID'
        }, {
            Header: 'Fecha',
            accessor: 'Date'
        }, {
            Header: 'Estado',
            accessor: 'Status',
        }, {
            Header: "Acciones",
            accessor: "actions",
            sortable: false,
            filterable: false
        }
    ]

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3">{"Solicitudes   "}</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <ReactTable
                                    data={data}
                                    columns={columns}
                                    filterable
                                    resizable={false}
                                    defaultPageSize={10}
                                    showPaginationBottom
                                    className="-striped -highlight"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            {modalAction()}
        </>
    )
}

export default content;