import React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles.scss';

export const Loader = () => {
  return (
    <div className="Loader">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};
