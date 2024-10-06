import { Row, Col } from 'react-bootstrap';
import CarItem from './CarItem';
import { FoundCar } from '../../interfaces';

const CarList = ({ carList }: { carList: FoundCar[] }) => {
  return (
    <Row className="car-grid">
      {carList.map((car) => (
        <Col key={car.url} xs={12} sm={6} lg={4} className="mb-4">
          <CarItem car={car} />
        </Col>
      ))}
    </Row>
  );
};

export default CarList;
