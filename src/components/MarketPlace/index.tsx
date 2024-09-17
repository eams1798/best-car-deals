import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { carList } from '../../data';
import FiltersSidebar from './FiltersSidebar';
import SortControls from './SortControls';
import CarList from './CarList';
import './MarketPlace.css';

const MarketPlace = () => {
  const [sortBy, setSortBy] = useState('price');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Container fluid className="marketplace">
      <Row>
        <Button
          variant="primary"
          className="d-md-none mb-3"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
        </Button>
        <Col xs={12} md={4} lg={3}>
          <FiltersSidebar isSidebarVisible={isSidebarVisible} />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <section className="car-list">
            <div className="car-list-header">
              <h2>Found cars</h2>
              <SortControls sortBy={sortBy} setSortBy={setSortBy} />
            </div>
            <CarList carList={carList} />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
