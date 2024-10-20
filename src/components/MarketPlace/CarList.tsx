import { Row, Col } from 'react-bootstrap';
import CarItem from './CarItem';
import { DefaultCarFilters, FoundCar } from '../../interfaces';
import { useQuery } from '@tanstack/react-query';
import { getFilteredCars } from '../../services/cars';
import { useEffect } from 'react';

interface ICarListProps {
  filters: DefaultCarFilters
  setIsDarkScreenVisible: (value: React.SetStateAction<boolean>) => void
  setCurrentCar: (value: React.SetStateAction<FoundCar | undefined>) => void
}

const CarList = ({ filters, setIsDarkScreenVisible, setCurrentCar }: ICarListProps) => {

  const result = useQuery({
    queryKey: ['carList'],
    queryFn: () => getFilteredCars(filters)}
  );

  useEffect(() => {
    result.refetch();
  }, [filters]);

  if (result.isLoading) {
    return <p>Loading...</p>;
  }

  if (result.isError) {
    return <p>Error: {result.error.message}</p>;
  }
  
  const carList = result.data as FoundCar[];
  
  return (
    <Row className="car-grid">
      {carList.map((car) => {
        if (car.errorMessage) {
          return (
            <Col key={"err"}>
              {car.errorMessage}
            </Col>
          );
        }
        return (
        <Col key={car.url} xs={12} sm={6} lg={4} className="mb-4">
          <CarItem car={car} setIsDarkScreenVisible={setIsDarkScreenVisible} setCurrentCar={setCurrentCar} />
        </Col>
      )
      })}
    </Row>
  );
};

export default CarList;
