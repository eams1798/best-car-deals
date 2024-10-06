import { Form, Button, Row, Col } from 'react-bootstrap';
import { DefaultCarFilters, FoundCar } from '../../interfaces';
import { useEffect, useState } from 'react';
import { getAllCars } from '../../services/cars';

interface IFiltersSidebarProps {
  setCarList: (value: React.SetStateAction<FoundCar[]>) => void;
  isSidebarVisible: boolean;
  sortBy: string;
  reversedSort?: boolean;
}

const FiltersSidebar = ({ setCarList, isSidebarVisible, sortBy, reversedSort }: IFiltersSidebarProps) => {
  const [filters, setFilters] = useState<DefaultCarFilters>({sort: sortBy, reversed_sort: reversedSort});

  useEffect(() => {
    setFilters({ ...filters, sort: sortBy, reversed_sort: reversedSort });
  }, [sortBy, reversedSort]);

  /* useEffect(() => {
    console.log('filters', filters);
  }, [filters]); */

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cars = await getAllCars(filters);
    setCarList(cars);
  };

  return (
    <aside className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
      <h2>Filters</h2>
      <Form>
        <div className="filter-group">
          <Row>
            <Col>
              <h3>Source</h3>
              {['Facebook', 'eBay', 'Craigslist'].map((source) => (
                <Form.Check
                  key={source}
                  type="checkbox"
                  id={source}
                  name="source"
                  value={source}
                  label={source}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      source: e.target.checked ? [...(filters.source || []), e.target.value]: (filters.source || []).filter((f) => f !== e.target.value)
                    });
                  }}
                />
              ))}
            </Col>
            <Col>
              <h3>Seller</h3>
              {['All', 'Private', 'Dealer'].map((seller) => (
                <Form.Check
                  key={seller}
                  type="radio"
                  id={seller.toLowerCase()}
                  name="seller"
                  value={seller.toLowerCase()}
                  label={seller}
                  onChange={(e) => {
                    setFilters({
                      ...filters,
                      sellerType: e.target.value
                    });
                  }}
                />
              ))}
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <Row>
            <Col>
              <h3>Distance (mi)</h3>
              <Form.Control
                type="number"
                name="distance"
                placeholder="Max. Distance"
                min="1"
                max="500"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    distance: parseInt(e.target.value)
                  });
                }}
                />
            </Col>
            <Col>
              <h3>Location</h3>
              <Form.Control
                type="text"
                name="distance"
                placeholder="zipcode/city"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    location: e.target.value
                  });
                }}
                />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Vehicle type</h3>
          {['Auto', 'Pickup', 'RV Camper'].map((type) => (
            <Form.Check
              key={type}
              type="radio"
              id={type.toLowerCase()}
              name="type"
              value={type.toLowerCase().replace(' ', '-')}
              label={type}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  vehicleType: e.target.value
                });
              }}
            />
          ))}
        </div>
        <div className="filter-group">
          <Row>
            <Col>
              <h3>Make</h3>
              <Form.Control
                type="text"
                name="make"
                placeholder="Enter make"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    make: e.target.value.toLowerCase()
                  });
                }}
                />
            </Col>
            <Col>
              <h3>Model</h3>
              <Form.Control
                type="text"
                name="model"
                placeholder="Enter model"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    model: e.target.value.toLowerCase()
                  });
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Body type</h3>
          {['Convertible', 'Coupe', 'Hatchback', 'Minivan', 'Pickup', 'Sedan', 'SUV', 'Wagon', 'Other'].map((type) => (
            <Form.Check
              key={type}
              type="checkbox"
              id={type.toLowerCase()}
              name="bodyType"
              value={type.toLowerCase().replace(' ', '-')}
              label={type}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  bodyType: e.target.checked ? [...(filters.bodyType || []), e.target.value]: (filters.bodyType || []).filter((f) => f !== e.target.value)
                });
              }}
            />
          ))}
        </div>
        <div className="filter-group">
          <h3>Transmission</h3>
          {['Automatic', 'Manual', 'Other'].map((type) => (
            <Form.Check
              key={type}
              type="radio"
              id={type.toLowerCase()}
              name="transmission"
              value={type.toLowerCase()}
              label={type}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  transmission: e.target.value
                })
              }}
            />
          ))}
        </div>
        <div className="filter-group">
          <h3>Year</h3>
          <Row>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="yearFrom"
                placeholder="From"
                min="1900"
                max={new Date().getFullYear()}
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    minYear: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="yearTo"
                placeholder="To"
                min="1900"
                max={new Date().getFullYear()}
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    maxYear: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Mileage</h3>
          <Row>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="mileageFrom"
                placeholder="From"
                min="0"
                max="999999"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    minMileage: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="mileageTo"
                placeholder="To"
                min="0"
                max="999999"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    maxMileage: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Price</h3>
          <Row>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="priceFrom"
                placeholder="From"
                min="0"
                max="999999"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    minPrice: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="priceTo"
                placeholder="To"
                min="0"
                max="999999"
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    maxPrice: parseInt(e.target.value)
                  })
                }}
              />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Color</h3>
          <Form.Control
            type="text"
            name="color"
            placeholder="Enter color"
            onChange={(e) => {
              setFilters({
                ...filters,
                color: e.target.value
              })
            }}
            />
        </div>
        <div className="filter-group">
          <h3>Condition</h3>
          {['New', 'Like New', 'Good', 'Fair'].map((type) => (
            <Form.Check
              key={type}
              type="checkbox"
              id={type.toLowerCase()}
              name="condition"
              value={type.toLowerCase()}
              label={type}
              onChange={(e) => {
                setFilters({
                  ...filters,
                  condition: e.target.checked ? [...(filters.condition || []), e.target.value]: (filters.condition || []).filter((f) => f !== e.target.value)
                });
              }}
            />
          ))}
        </div>
        <Button variant="primary" type="button" className="w-100" onClick={onSubmit}>
          Apply Filters
        </Button>
        <Button variant="primary" type="button" className="w-100" onClick={() => setCarList([])}>
          Clear List
        </Button>
      </Form>
    </aside>
  );
};

export default FiltersSidebar;
