import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la C</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con C los verbos terminados en 
                  <span className="cursiva">ciar</span>.{' '}
                  <span className="pRojo"> Excepciones</span>: <b>lisiar</b>,{' '}
                  <b>ansiar</b>,<b>extasiar</b>, <b>anestesiar</b>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>:  apre<b>c</b>iar,
                  acari<b>c</b>iar, ne<b>c</b>iar, va<b>c</b>iar, nego<b>c</b>
                  iar, vi<b>c</b>iar.
                </li>
                <li className="mt-3">
                  Se escriben con C las palabras terminadas en 
                  <span className="cursiva">acia</span>,{' '}
                  <span className="cursiva">icia</span>, <i>icie</i>,<i>icio</i>
                  . <span className="pRojo"> Excepciones</span>: <b>Dionisio</b>
                  , <b>gimnasio</b>, <b>Asia</b>, <b>anastasia</b>,{' '}
                  <b>alisio</b>, <b>eutanasia</b>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>:  Feni<b>c</b>io,
                  plani<b>c</b>ie, bulli<b>c</b>io, peri<b>c</b>ia, codi<b>c</b>
                  ia, mali<b>c</b>ia, fala<b>c</b>ia.
                </li>
                <li className="mt-3">
                  Se escribe con C la terminación <i>ces</i> que surge del
                  plural de las palabras que contienen z.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>:  maíz-maí<b>c</b>
                  es, raíz-raí<b>c</b>es, pez-pe<b>c</b>es, rapaz-rapa<b>c</b>
                  es, atroz-atro<b>c</b>es
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
