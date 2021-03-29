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
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable, MDBBtn } from "mdbreact";
import CreateDocTemplate from "../../components/CreateDocTemplate";

// import BarChart from './HomeCharts/barchart';
// import RecentSaleChart from './HomeCharts/recentSaleChart';
// import CurrentSaleChart from './HomeCharts/currentSaleChart';
// import Radarchart from './HomeCharts/radarchart';

function CreateDocFrom() {
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
      <CreateDocTemplate title="Tao van ban di" />
    </React.Fragment>
  );
}

export default CreateDocFrom;
