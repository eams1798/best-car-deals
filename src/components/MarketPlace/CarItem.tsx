import { Card, Button } from 'react-bootstrap';
import { FoundCar } from '../../interfaces';

interface ICarItemProps {
  car: FoundCar;
  setIsDarkScreenVisible: (value: React.SetStateAction<boolean>) => void
  setCurrentCar: (value: React.SetStateAction<FoundCar | undefined>) => void
}

const CarItem = ({ car, setIsDarkScreenVisible, setCurrentCar }: ICarItemProps) => {
  return (
    <Card className={`car-item source-${car.source}`}>
      <div onClick={() => {
        setIsDarkScreenVisible(true)
        setCurrentCar(car)
        }}>
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
      </div>
    </Card>
  );
};

export default CarItem;
