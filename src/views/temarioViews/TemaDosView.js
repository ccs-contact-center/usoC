import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la C</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con C los diminutivos: 
                  <span className="cursiva">cito</span>,
                  <span className="cursiva">ecito</span>,
                  <span className="cursiva">ecillo</span>, si proceden de
                  palabras que no terminan con S.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: pez-pece<b>c</b>
                  ito, dulce-dulce<b>c</b>ito, pie-pie<b>c</b>e<b>c</b>ito,
                  flor-flore<b>c</b>ita, mamá-mama<b>c</b>ita.
                </li>
                <li className="mt-3">
                  Se escriben con C los sufijos 
                  <span className="cursiva">cida</span>,{' '}
                  <span className="cursiva">cido</span>,{' '}
                  <span className="cursiva">cidio</span>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: homi<b>c</b>ida,
                  parri<b>c</b>ida, amane<b>c</b>ido, apare<b>c</b>ida, estable
                  <b>c</b>ido, geno<b>c</b>idio.
                </li>
                <li className="mt-3">
                  Se escriben con C, las palabras terminadas en{' '}
                  <span className="cursiva"> cimiento</span>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: agrade<b>c</b>
                  imiento, pade<b>c</b>imiento, restable<b>c</b>imiento, na
                  <b>c</b>imiento, estable<b>c</b>imiento, enrique<b>c</b>
                  imiento.
                </li>
                <li>
                  Se escriben con C los verbos terminados en 
                  <span className="cursiva">cer</span>.{' '}
                  <span className="pRojo"> Excepciones</span>:<b> toser</b>,{' '}
                  <b>coser</b>, <b>ser</b>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: na<b>c</b>er, ya
                  <b>c</b>er, ha<b>c</b>er, adole<b>c</b>er, agrade<b>c</b>er,
                  retor<b>c</b>er, estreme<b>c</b>er.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
