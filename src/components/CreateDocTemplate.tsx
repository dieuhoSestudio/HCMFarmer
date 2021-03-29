import React, { Component, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Card,
  CardBody,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  CustomInput,
} from "reactstrap";
import { activateAuthLayout } from "../store/actions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable, MDBBtn } from "mdbreact";

// import BarChart from './HomeCharts/barchart';
// import RecentSaleChart from './HomeCharts/recentSaleChart';
// import CurrentSaleChart from './HomeCharts/currentSaleChart';
// import Radarchart from './HomeCharts/radarchart';

function CreateDocTenplate(props: any) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }));
  console.log("USERSTAEEEEEEEE", user);
  useEffect(() => {
    dispatch(activateAuthLayout());
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col md="12">
          <Card>
            <CardBody className="m-4">
              <h4 className="card_title">{props.title}</h4>

              <Form>
                <Row className="">
                  <Col md="6" className="border-right border-secondary pr-5">
                    <FormGroup row className="div-input-text">
                      <Label htmlFor="example-text-input" sm="12">
                        Tieu de van ban
                      </Label>
                      <Col sm="12">
                        <Input
                          type="text"
                          // defaultValue="Carlos Rath"
                          id="example-text-input"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="example-email-input" sm="12">
                        Mo ta van ban
                      </Label>
                      <Col sm="12">
                        <Input
                          type="textarea"
                          // defaultValue="name@example.com"
                          id="example-email-input"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                      <Label htmlFor="example-email-input" sm="12">
                        Mo ta van ban
                      </Label>
                      <Col sm={10}>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" />
                            Linh vuc hanh chinh
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" /> Linh vuc nhan
                            su
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm="12">Select</Label>
                      <Col sm="12">
                        <select className="form-control ">
                          <option>Van ban hanh chinh</option>
                          <option>Van ban nhan su</option>
                          <option>Bao cao</option>
                        </select>
                      </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                      <Label htmlFor="example-email-input" sm="12">
                        Do khan cap
                      </Label>
                      <Col sm={10}>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" /> Khong khan cap
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" /> Khan cap
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" /> Rat khan cap
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="6" className="border-left border-secondary pl-5">
                    <FormGroup tag="fieldset" row>
                      <Label htmlFor="example-email-input" sm="12">
                        Do bao mat
                      </Label>
                      <Col sm={10}>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio3" /> Bao mat A
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio3" />
                            Bao mat B
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                      <Label htmlFor="example-email-input" sm="12">
                        Phuong thuc xu ly
                      </Label>
                      <Col sm={10}>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio4" /> Phuong thuc xu
                            ly A
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio4" />
                            Phuong thuc xu ly B
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="example-email-input" sm="12">
                        Ghi chu
                      </Label>
                      <Col sm="12">
                        <Input
                          type="textarea"
                          // defaultValue="name@example.com"
                          id="example-email-input"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label htmlFor="example-text-input" sm="12">
                        Cac tap tin
                      </Label>
                      <Col sm="12" className="col-choose-file">
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser"
                          name="customFile"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                      {/* <Label htmlFor="example-email-input" sm="12">
                        Can
                      </Label> */}
                      <legend>Radio Buttons</legend>
                      <Col sm={10}>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio5" /> Thong bao
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio5" />
                            Xu ly
                          </Label>
                        </FormGroup>{" "}
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio5" />
                            Xu ly va phat hanh ket qua
                          </Label>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-around align-items-center py-3">
                  <FormGroup row>
                    <Col sm="12" className="text-center">
                      <button
                        type="button"
                        className="btn btn-success btn-table-green "
                      >
                        Tao moi
                      </button>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="12" className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger btn-table-pink "
                      >
                        Huy
                      </button>
                    </Col>
                  </FormGroup>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default CreateDocTenplate;
