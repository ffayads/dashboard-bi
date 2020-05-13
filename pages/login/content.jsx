import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Container,
    Row,
    Col,
    Badge,
    Modal,
    Form,
} from "reactstrap";
import { ContextOne } from '../../context/global';
import { Login } from "../../Utlis/auth";
import { useForm, Controller } from "react-hook-form";

const Content = (props) => {
    const { state, dispatch } = React.useContext(ContextOne);
    const { handleSubmit, errors, control, reset } = useForm();
    const onSubmit = data => Login(data, dispatch)

    React.useEffect(() => {
        document.body.classList.toggle("register-page");
    });

    return (
        <>
            <Modal
                className="modal-login"
                // modalClassName="modal-primary"
                isOpen={true}
            >
                <Card className="card-login card-plain" >
                    <CardHeader className="modal-header justify-content-center" >
                        <div className="header header-primary text-center">
                            <div className="modal-profile">
                                <i className="tim-icons icon-single-02" style={{ color: "black" }} />
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="justify-content-center" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label for="exampleEmail">Correo</Label>
                                <Controller
                                    as={Input}
                                    control={control}
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    autoComplete="off"
                                    rules={{
                                        required: true
                                    }}
                                    defaultValue=""
                                    style={{ color: "black" }}
                                />
                                {errors.email && <Badge color="warning" pill>El campo es requerido</Badge>}
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Contraseña</Label>
                                <Controller
                                    as={Input}
                                    control={control}
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    autoComplete="off"
                                    rules={{
                                        required: true
                                    }}
                                    defaultValue=""
                                    style={{ color: "black" }}
                                />
                                {errors.password && <Badge color="warning" pill>El campo es requerido</Badge>}
                            </FormGroup>
                            <center>
                                <Button type="submit" className="btn-round" color="info" size="lg" >
                                    {"Iniciar"}
                                </Button>
                            </center>
                        </form>
                    </CardBody>
                </Card>
            </Modal>
        </>
    );
}

export default Content;