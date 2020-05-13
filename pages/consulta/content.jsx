import React from 'react';
import Select from "react-select";
import ReactTable from 'react-table-v6';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Table, Input, FormGroup } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { reportS } from '../../variables/varGeneral';
import { getReports } from '../../Utlis/get';
import Modal from '../../components/Modal/modal';

const content = () => {
    const [state, setState] = React.useState({
        data: [],
        loading: false,
        filter: "",
        valfilter: "",
        typeValFilter: "text",
        query: []
    });
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        return () => {
            setState({ ...state, data: [] });
        }
    }, [])

    const columns = [
        {
            Header: 'Tipo de Evento',
            accessor: 'TypeReport'
        }, {
            Header: 'Estado',
            accessor: 'Status',
        }, {
            Header: 'Usuario Visador',
            accessor: 'AdminUser',
        }, {
            Header: props => <center>{"Fecha de evento"}</center>,
            accessor: "Date",
        }
    ];

    const optionFilter = [
        { value: "@", label: "Seleccione", isDisabled: true },
        { value: "id", label: "Numero de registro", type: "number" },
        { value: "type_reports_id", label: "Tipo de evento", type: "number" },
        { value: "users_id", label: "Usuario", type: "number" },
        { value: "status", label: "Estado", type: "number" },
        { value: "admin_users_id", label: "Funcionario", type: "number" },
        { value: "date_from", label: "Fecha inicial", type: "date" },
        { value: "date_to", label: "Fecha final", type: "date" },
    ];

    const getdata = () => {
        setState({ ...state, loading: true })
        let query = {};
        state.query.map(elem => {
            let obj = Object.entries(elem)[0];
            let type = optionFilter.filter(of => of.value === obj[0])[0];
            let val = obj[1];
            if (type.type === "number") val = parseInt(val);
            if (type.type === "date") val = val + " 00:00:00";
            query[obj[0]] = val;
        })
        getReports(query).then(elem => {
            if (elem !== undefined && elem.data.reports !== undefined) {
                let newData = [];
                elem.data.reports.map((e) => {
                    e['Date'] = new Date(e.Time).toLocaleDateString();
                    e['Status'] = reportS[e.Status];
                    newData.push(e)
                })
                setState({ ...state, data: newData, loading: false })
                setModal(false);
            } else {
                setState({ ...state, data: [], loading: false })
                setModal(false);
            }
        })
    };

    const query = () => {
        let { filter, valfilter } = state;
        if (valfilter !== undefined && valfilter !== "") {
            setState({
                ...state,
                query: [
                    ...state.query,
                    { [filter.value]: valfilter }
                ],
                valfilter: "",
                typeValFilter: "text",
                filter: ""
            })
        }
    }

    const queryDelete = (index) => {
        let arr = state.query
        let i = arr.indexOf(index);
        arr.splice(i, 1);
        setState({
            ...state,
            query: arr
        })
    }

    const getFilter = () => {
        let trTable = () => {
            return state.query.map((elem, i) => {
                let objet = Object.entries(elem)[0];
                let label = optionFilter.filter(of => of.value === objet[0]);
                return (
                    <tr key={"tr_" + i}>
                        <td>{label[0].label}</td>
                        <td className="text-right">{objet[1]}</td>
                        <td className="text-right">
                            <Button className="btn-round" color="danger" size="sm" onClick={() => { queryDelete(i) }}>
                                <i className="tim-icons icon-simple-remove"></i>
                            </Button>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <>
                <Row>
                    <Col xs={5}>
                        <Select
                            className="react-select info"
                            classNamePrefix="react-select"
                            name="fiterSelect"
                            value={state.filter || ""}
                            onChange={value =>
                                setState({ ...state, filter: value, typeValFilter: value.type, valfilter: "" })
                            }
                            options={optionFilter || ""}
                            placeholder="Filtrar por ..."
                        />
                    </Col>
                    <Col xs={3}>
                        <FormGroup className="has-info">
                            <Input
                                className={"info"}
                                type={state.typeValFilter || "text"}
                                placeholder="Valor"
                                value={state.valfilter || ""}
                                onChange={(e) => setState({ ...state, valfilter: e.target.value })}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <Button className="btn-round" color="info" size="sm" onClick={() => { query() }}>
                            <i className="tim-icons icon-simple-add"></i>{" Agregar"}
                        </Button>
                    </Col>
                    <hr />
                    <Col xs={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Filtro</th>
                                    <th className="text-right">Valor</th>
                                    <th className="text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {trTable()}
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12}>
                        <center>
                            <Button className="btn-round" color="success" size="lg" onClick={() => { getdata() }}>
                                <i className="tim-icons icon-send"></i>{" Aplicar"}
                            </Button>
                        </center>
                    </Col>
                </Row>
            </>
        )
    }

    const getTable = () => {
        return (
            <Table id="excel">
                <thead key={"report_head"}>
                    <tr key={"header"}>
                        <th>{"Tipo de Evento"}</th>
                        <th>{"Estado"}</th>
                        <th>{"Usuario visador"}</th>
                        <th>{"Fecha de evento"}</th>
                    </tr>
                </thead>
                <tbody key={"report_body"}>
                    {state.data.map((elem, i) => {
                        return (
                            <tr key={"body_tr_" + i}>
                                {columns.map((header, m) => {
                                    return <td key={"body_td_" + i + m}>{elem[header.accessor]}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table >
        )
    }

    return (
        <>
            <div className="content">
                <Row>
                    <Col xs={12} md={12}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col xs={3}>
                                        <CardTitle tag="h3">{"Consulta de sistema"}</CardTitle>
                                    </Col>
                                    <Col xs={9} className="text-right">
                                        <ReactHTMLTableToExcel
                                            table="excel"
                                            filename="Report"
                                            sheet="page"
                                            className="btn-round btn btn-success btn-sm"
                                            buttonText="Excel"
                                        />
                                        <Button className="btn-round" color="danger" size="sm" onClick={() => console.log("pdf")} disabled>
                                            <i className="fa fa-user"></i>{"Pdf"}
                                        </Button>
                                        <Button className="btn-round" color="info" size="sm" onClick={() => { setModal(true) }}>
                                            <i className="fa fa-user"></i>{"Filtrar"}
                                        </Button>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ReactTable
                                    columns={columns}
                                    data={state.data}
                                    loading={state.loading}
                                    defaultPageSize={10}
                                    sortable={false}
                                    resizable={false}
                                    className="-striped -highlight"
                                    onFetchData={(state, instance) => getdata(state)}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal modal={modal} setModal={setModal} title={"Filtrar"} size={"lg"}>
                    {getFilter()}
                </Modal>
            </div>
            <div style={{ display: "none" }}>
                {getTable()}
            </div>
        </>
    )
}

export default content;