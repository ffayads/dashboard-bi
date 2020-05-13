import Admin from '../layouts/Admin';
import { Row, Card, CardHeader, CardTitle, Col, CardBody } from 'reactstrap';
import Link from 'next/link';

const Custom404 = (props) => {
    return (
        <div className="content">
            <Card>
                <CardHeader>
                    <CardTitle> Pagina en mantenimiento </CardTitle>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col xs={12}>
                            <h1> Ajustes en proceso...</h1>
                        </Col>
                        <Link href="/login"> Regresar </Link>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default Custom404;