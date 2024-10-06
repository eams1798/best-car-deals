import { Card, Button } from 'react-bootstrap';
import { FoundCar } from '../../interfaces';

const CarItem = ({ car }: { car: FoundCar }) => {
  return (
    <Card className={`car-item source-${car.source}`}>
      <a href={car.url}>
        <Card.Img variant="top" src={car.img} alt={`${car.title}`} />
        <Card.Body>
          <Card.Title>
            <h3>{car.title}</h3>
          </Card.Title>
          <Card.Text>Price: ${car.newPrice}</Card.Text>
          <Card.Text>Mileage: {car.mileage} mi</Card.Text>
          <Card.Text>Location: {car.location}</Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </a>
    </Card>
  );
};

export default CarItem;
