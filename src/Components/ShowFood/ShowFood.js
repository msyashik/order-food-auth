import React from "react";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ShowFood = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props.food;
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={strCategoryThumb} />
        <Card.Body>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Card.Text>
          <Link to="/order">
            <Button>Order Food</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowFood;
