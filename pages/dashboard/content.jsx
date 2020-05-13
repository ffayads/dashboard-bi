import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import { getData, 
    chartExample1,
    chartExample3,
    chartExample4
} from './function';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Progress,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

const content = (props) => {
    let [bigChartData, setbigChartData] = React.useState("data1");
    console.log(chartExample1);
    return (
        <>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <h5 className="card-category">Visitas</h5>
                                        <CardTitle tag="h2">Total de visitas</CardTitle>
                                    </Col>
                                    <Col sm="6">
                                        <ButtonGroup
                                            className="btn-group-toggle float-right"
                                            data-toggle="buttons"
                                        >
                                            <Button
                                                color="info"
                                                id="0"
                                                size="sm"
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data1"
                                                })}
                                                onClick={() => setbigChartData("data1")}
                                            >
                                                <input defaultChecked name="options" type="radio" />
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Mes
                                                </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-single-02" />
                                                </span>
                                            </Button>
                                            <Button
                                                color="info"
                                                id="1"
                                                size="sm"
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data2"
                                                })}
                                                onClick={() => setbigChartData("data2")}
                                            >
                                                <input name="options" type="radio" />
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Año
                                                </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-gift-2" />
                                                </span>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample1[bigChartData]}
                                        options={chartExample1.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Tiempo promedio de atencion</h5>
                                <CardTitle tag="h3">
                                    Tiempo promedio diario en minutos
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Bar
                                        data={chartExample3.data}
                                        options={chartExample3.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Afiliaciones por nacionalidad</h5>
                                <CardTitle tag="h3">
                                    Nacionalidad
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample4.data}
                                        options={chartExample4.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default content;