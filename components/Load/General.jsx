import React from 'react';
import { Progress } from 'reactstrap';

const General = () => {
    let [porcent, setPorcent] = React.useState(0);
    React.useEffect(() => {
        if (porcent < 90) {
            setPorcent(porcent + 1);
        }
    })
    return (
        <div className="container" style={{ marginTop: "25%" }}>
            < div className="progress-container progress-success" >
                <span className="progress-badge">Cargando...</span>
                <Progress max="100" value={porcent} barClassName="progress-bar-success">
                    <span className="progress-value">{porcent}%</span>
                </Progress>
            </div >
        </div>
    )
}


export default General;