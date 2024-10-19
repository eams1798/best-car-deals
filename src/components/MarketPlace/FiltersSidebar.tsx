import { Form, Button, Row, Col } from 'react-bootstrap';
import { DefaultCarFilters } from '../../interfaces';
import { useEffect, useRef, useState } from 'react';
import GMPAutocompleteInput from '../GMPAutocompleteInput';
import { parseLocation } from '../../utils/parseLocation';

interface IFiltersSidebarProps {
  filters: DefaultCarFilters
  setFilters: React.Dispatch<React.SetStateAction<DefaultCarFilters>>
  isSidebarVisible: boolean;
}

const FiltersSidebar = ({ filters, setFilters, isSidebarVisible }: IFiltersSidebarProps) => {
  const locationRef = useRef<HTMLInputElement>();
  const [newFilters, setNewFilters] = useState<DefaultCarFilters>(filters);
  const [notification, setNotification] = useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({
      ...newFilters,
      location: locationRef.current?.value ? parseLocation(locationRef.current?.value) : undefined
    });
    setNotification('Filters applied. Looading could take +10 seconds...');
    console.log('newFilters', newFilters);
  };

  useEffect(() => {
    console.log(newFilters);
  }, [newFilters]);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  })
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
                    setNewFilters({
                      ...newFilters,
                      source: e.target.checked ? [...(newFilters.source || []), e.target.value]: (newFilters.source || []).filter((f) => f !== e.target.value)
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
                    setNewFilters({
                      ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
                    distance: parseInt(e.target.value)
                  });
                }}
                />
            </Col>
            <Col>
              <h3>Location</h3>
              <GMPAutocompleteInput ref={locationRef} />
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
                setNewFilters({
                  ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                setNewFilters({
                  ...newFilters,
                  bodyType: e.target.checked ? [...(newFilters.bodyType || []), e.target.value]: (newFilters.bodyType || []).filter((f) => f !== e.target.value)
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
                setNewFilters({
                  ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
                  setNewFilters({
                    ...newFilters,
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
              setNewFilters({
                ...newFilters,
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
                setNewFilters({
                  ...newFilters,
                  condition: e.target.checked ? [...(newFilters.condition || []), e.target.value]: (newFilters.condition || []).filter((f) => f !== e.target.value)
                });
              }}
            />
          ))}
        </div>
        <div className="notification">{notification}</div>
        <Button variant="primary" type="button" className="w-100" onClick={onSubmit}>
          Apply Filters
        </Button>
      </Form>
    </aside>
  );
};

export default FiltersSidebar;
