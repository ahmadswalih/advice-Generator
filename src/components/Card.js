import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Card = ({ quote }) => {
  return (
    <div>
      {quote.map((content) => (
        <Card key={content.id} body color="primary" inverse>
          <CardBody>
            <CardTitle tag="h5">Quote ${content.id}</CardTitle>
            <CardText>{content.advice}</CardText>
            <Button>Get Another</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Card;
