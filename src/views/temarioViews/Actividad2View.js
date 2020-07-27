import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import actividad2 from '../../assets/img/usoC/actividad2.png'
import AuthService from "../../services/AuthService";
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService();
    this.state = {
     
      cir1: '',
      cir2: '',
      cir3: '',
      ducir1: '',
      ducir2: '',
      ducir3: '',
      ancia1: '',
      ancia2: '',
      ancia3: '',
      ancio1: '',
      ancio2: '',
      ancio3: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: "usoC",
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state)
      alert('Se guardo la actividad, con id: ' + respuesta[0].id)

    } catch (err) {
      console.log('loggea si hay un error')
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 2: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="9">
                  <p>
                    2.- Sabrías escribir palabras que acaben en <b>cir</b> y 
                    <b>ducir</b> y otras palabras acabadas en <b>ancia</b>,{' '}
                    <b>ancio</b>. Pon tres ejemplos de cada una.
                  </p>
                </Col>
                <Col xs="3">
                  <img
                    src={actividad2}
                    style={{ width: 150 }}
                    alt="actividad2 "
                    className="img-fluid animated  bounceInRight delay-1s"
                  />
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="cir1">
                          <b>cir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="cir1"
                          id="cir1"
                          value={this.state.cir1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="cir2">
                          <b>cir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="cir2"
                          id="cir2"
                          value={this.state.cir2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="cir3">
                          <b>cir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="cir3"
                          id="cir3"
                          value={this.state.cir3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="ducir1">
                          <b>ducir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="ducir1"
                          id="ducir1"
                          value={this.state.ducir1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ducir2">
                          <b>ducir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="ducir2"
                          id="ducir2"
                          value={this.state.ducir2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ducir3">
                          <b>ducir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="ducir3"
                          id="ducir3"
                          value={this.state.ducir3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="ancia1">
                          <b>ancia</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="ancia1"
                          id="ancia1"
                          value={this.state.ancia1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ancia2">
                          <b>ancia</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="ancia2"
                          id="ancia2"
                          value={this.state.ancia2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ancia3">
                          <b>ancia</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="ancia3"
                          id="ancia3"
                          value={this.state.ancia3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="ancio1">
                          <b>ancio</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="ancio1"
                          id="ancio1"
                          value={this.state.ancio1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ancio2">
                          <b>ancio</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="ancio2"
                          id="ancio2"
                          value={this.state.ancio2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="ancio3">
                          <b>ancio</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="ancio3"
                          id="ancio3"
                          value={this.state.ancio3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

            
                <div>
                  {/* <p>{JSON.stringify(this.state)}</p> */}
                </div>
          
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
