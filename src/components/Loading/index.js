import React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles.css';


export default function Loading() {
  return (
    <div className="Loading-main">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
