import { Row, Col } from 'react-bootstrap';
import CarItem from './CarItem';
import { Car } from '../../interfaces';

const CarList = ({ carList }: { carList: Car[] }) => {
  return (
    <Row className="car-grid">
      {carList.map((car) => (
        <Col key={car.id} xs={12} sm={6} lg={4} className="mb-4">
          <CarItem car={car} />
        </Col>
      ))}
    </Row>
  );
};

export default CarList;
