import { Form, Button, Row, Col } from 'react-bootstrap';

const FiltersSidebar = ({ isSidebarVisible }: { isSidebarVisible: boolean }) => {
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
                  id={source.toLowerCase()}
                  name="source"
                  value={source.toLowerCase()}
                  label={source}
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
                max="500" />
            </Col>
            <Col>
              <h3>Location</h3>
              <Form.Control
                type="text"
                name="distance"
                placeholder="zipcode/city" />
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
            />
          ))}
        </div>
        <div className="filter-group">
          <Row>
            <Col>
              <h3>Make</h3>
              <Form.Control type="text" name="make" placeholder="Enter make" />
            </Col>
            <Col>
              <h3>Model</h3>
              <Form.Control type="text" name="model" placeholder="Enter model" />
            </Col>
          </Row>
        </div>
        {/* 'convertible' | 'coupe' | 'hatchback' | 'minivan' | 'truck' | 'sedan' | 'suv' | 'wagon' | 'other_body_style'  */}
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
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="yearTo"
                placeholder="To"
                min="1900"
                max={new Date().getFullYear()}
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
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="mileageTo"
                placeholder="To"
                min="0"
                max="999999"
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
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="number"
                name="priceTo"
                placeholder="To"
                min="0"
                max="999999"
              />
            </Col>
          </Row>
        </div>
        <div className="filter-group">
          <h3>Color</h3>
          <Form.Control
            type="text"
            name="color"
            placeholder="Enter color" />
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
            />
          ))}
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Apply Filters
        </Button>
      </Form>
    </aside>
  );
};

export default FiltersSidebar;
