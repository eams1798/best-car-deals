import { Form, Button, Row, Col } from 'react-bootstrap';

const FiltersSidebar = ({ isSidebarVisible }: { isSidebarVisible: boolean }) => {
  return (
    <aside className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
      <h2>Filters</h2>
      <Form>
        <div className="filter-group">
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
        </div>
        <div className="filter-group">
          <h3>Make</h3>
          <Form.Control type="text" name="make" placeholder="Enter make" />
        </div>
        <div className="filter-group">
          <h3>Model</h3>
          <Form.Control type="text" name="model" placeholder="Enter model" />
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
          <h3>Distance (mi)</h3>
          <Form.Control type="number" name="distance" placeholder="Max. Distance" />
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
        <Button variant="primary" type="submit" className="w-100">
          Apply Filters
        </Button>
      </Form>
    </aside>
  );
};

export default FiltersSidebar;
