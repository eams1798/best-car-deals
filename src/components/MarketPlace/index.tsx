import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
/* import { carList } from '../../data'; */
import FiltersSidebar from './FiltersSidebar';
import SortControls from './SortControls';
import CarList from './CarList';
import './MarketPlace.css';
import { DefaultCarFilters, FoundCar } from '../../interfaces';
import FBCarElement from './FBCarElement';
import CLCarElement from './CLCarElement';

interface IMarketPlaceProps {
  filters: DefaultCarFilters,
  setFilters: (value: React.SetStateAction<DefaultCarFilters>) => void
};

const MarketPlace = ({ filters, setFilters }: IMarketPlaceProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDarkScreenVisible, setIsDarkScreenVisible] = useState(false);
  const [currentCar, setCurrentCar] = useState<FoundCar | undefined>();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const darkScreenStyle: React.CSSProperties = {
    display: isDarkScreenVisible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
  };

  return (
    <Container fluid className="marketplace">
      <div className="dark-screen" style={darkScreenStyle} onClick={() => {
        setIsDarkScreenVisible(false);
        setCurrentCar(undefined);
        }}>
        {currentCar && (
          currentCar.source === 'Facebook' ? 
          <FBCarElement currentCar={currentCar} />:
          <CLCarElement currentCar={currentCar} />
        )}
      </div>
      <Row>
        <Button
          variant="primary"
          className="d-md-none mb-3"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
        </Button>
        <Col xs={12} md={4} lg={3}>
          <FiltersSidebar filters={filters} setFilters={setFilters} isSidebarVisible={isSidebarVisible} />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <section className="car-list">
            <div className="car-list-header">
              <h2>Found cars</h2>
              <SortControls filters={filters} setFilters={setFilters} />
            </div>
            <CarList
              filters={{ ...filters }}
              setIsDarkScreenVisible={setIsDarkScreenVisible}
              setCurrentCar={setCurrentCar} />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
