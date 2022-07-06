import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const ComponentCard = ({ quote }) => {
  return (
    <div>
      <Row>
        <Col sm="6" className="align-center">
          <Card body>
            <CardTitle tag="h5">Quote #{quote.id}</CardTitle>
            <CardText>{quote.advice}</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ComponentCard;
