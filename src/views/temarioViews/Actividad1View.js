import React, { Component } from "react";
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
} from "reactstrap";
import actividad1 from "../../assets/img/usoC/actividad1.png";
import swal from "sweetalert"
//importamos el AuthService para poder traernos el perfil de usuario
import AuthService from "../../services/AuthService";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  constructor(state) {
    super(state);
    //instanciamos el Authservice
    this.Auth = new AuthService();
    this.state = {
      Cosina: "",
      Cacerola: "",
      Abesedario: "",
      Bronseado: "",
      Funcionario: "",
      Diferencias: "",
      Canselar: "",
      Desición: "",
      Conferencia: "",
      //asignamos un state con el id_ccs
      id_ccs: this.Auth.getProfile().id_ccs,
      //asignamos un state con el nombre del form
      form: "usoC-1",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });
      
      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>
                    1.- Atrévete y tacha las palabras que contengan la letra C
                    mal escrita.
                  </p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="9" md="8">
                      <Form>
                        <div
                          className="cajaA2 centrado-fila"
                          style={{ backgroundColor: "#d5d4d8" }}
                        >
                          <img
                            src={actividad1}
                            style={{ width: 260 }}
                            alt="actividad1 "
                            className="img-fluid animated  bounceInRight delay-1s"
                          />
                          <FormGroup
                            tag="fieldset"
                            style={{ marginBottom: "0px" }}
                          >
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Cosina</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Cosina"
                                      id="Cosina"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Cacerola</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Cacerola"
                                      id="Cacerola"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Abesedario</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Abesedario"
                                      id="Abesedario"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Bronseado</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Bronseado"
                                      id="Bronseado"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Funcionario</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Funcionario"
                                      id="Funcionario"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Diferencias</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Diferencias"
                                      id="Diferencias"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Canselar</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Canselar"
                                      id="Canselar"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Desición</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Desición"
                                      id="Desición"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>

                            <FormGroup check>
                              <div className="centrado-fila">
                                <div>Conferencia</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                  <Label check>
                                    <Input
                                      type="checkbox"
                                      name="Conferencia"
                                      id="Conferencia"
                                      onChange={this.onChange.bind(this)}
                                      style={{ marginTop: "-12px" }}
                                    />
                                  </Label>
                                </div>
                              </div>
                            </FormGroup>
                          </FormGroup>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ActividadView;
