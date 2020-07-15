import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la C</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <ul>
                <li>
                  Se escriben con C las formas de los verbo terminados en{' '}
                  <i>ceder</i>,<i>cender</i>, <i>cibir</i>, <i>citar</i>,
                  siempre que no proceda de raíces que lleven s.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>:  con<b>c</b>eder,
                  en<b>c</b>ender, re<b>c</b>itar, re<b>c</b>ibir, ante<b>c</b>
                  eder, per<b>c</b>ibir.
                </li>
                <li className="mt-3">
                  Se escriben con C los verbos terminados en <i>zar</i>. Ante la
                  vocal <i>e</i> cambian a <i>c</i>.
                </li>
                <li>
                  <span className="pAmarillo">Ejemplos</span>: Analizar – Anali
                  <b>c</b>e, avergonzar-avergüen<b>c</b>e, canalizar – canali
                  <b>c</b>e, utilizar – utili<b>c</b>e.
                </li>
                <li className="mt-3">
                  ¿Sabrías ya distinguir a partir de ahora las palabras que se
                  escriben con C de forma correcta?
                </li>
              </ul>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
