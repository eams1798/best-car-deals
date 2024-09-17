import { Card, Button } from 'react-bootstrap';
import { Car } from '../../interfaces';

const CarItem = ({ car }: { car: Car }) => {
  return (
    <Card className={`car-item source-${car.source}`}>
      <Card.Img variant="top" src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <Card.Body>
        <Card.Title>
          {car.year} {car.make} {car.model}
        </Card.Title>
        <Card.Text>Price: ${car.price}</Card.Text>
        <Card.Text>Mileage: {car.mileage} mi</Card.Text>
        <Card.Text>Location: {car.location}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default CarItem;
