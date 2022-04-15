import React from 'react';
import './styles.scss';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export const StreamSettings = () => {
  return (
    <div className="StreamSettings h-100">
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};
