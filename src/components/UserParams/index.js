import React from 'react';
import './styles.scss';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const UserParams = () => {
  return (
    <div className="UserParams h-100">
      <div className="TittleParametrs">
        <h5>Список параметров пользователя</h5>
      </div>
      <ListGroup className="ParametrsList" variant="primary">
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
