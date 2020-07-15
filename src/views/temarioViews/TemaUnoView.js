import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'


class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la C</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la C</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1">
                <li>
                  Se escriben con C los verbos terminados en 
                  <span className="cursiva">cir</span> y 
                  <span className="cursiva">ducir</span>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: conducir, aducir,
                  traducir, esparcir, producir, relucir, zurcir, decir.{' '}
                  <span className="pRojo"> Excepción</span>: <b>asir</b>.
                </li>

                <li className="mt-3">
                  Se escriben con C las palabras terminadas en{' '}
                  <span className="cursiva">ancia</span>,{' '}
                  <span className="cursiva">ancio</span>, encía.{' '}
                  <span className="pRojo"> Excepciones</span>: <b>ansia</b>,{' '}
                  <b>Hortensia</b>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: constan<b>c</b>
                  ia, excelen<b>c</b>ia, extravagan<b>c</b>ia, cansan<b>c</b>io,
                  decaden<b>c</b>ia, indulgen<b>c</b>ia, fragan<b>c</b>ia.
                </li>
                <li  className="mt-3">
                  Se escriben con C las palabras terminadas en <span className="cursiva">ción</span>, afines
                  a <span className="cursiva">to</span>, <span className="cursiva">tor</span>, <span>dar</span>.
                </li>
                <li>
                  Ejemplos: composi<b>c</b>ión-compositor, bendi<b>c</b>ión-bendito,
                  rota<b>c</b>ión-rotador, atribu<b>c</b>ión-atributo.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
