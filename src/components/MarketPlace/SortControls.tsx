import { Form, Row, Col } from 'react-bootstrap';

const SortControls = ({ sortBy, setSortBy }: { sortBy: string, setSortBy: (value: string) => void }) => {
  return (
    <div className="sort-controls">
      <Row className="align-items-center">
        <Col xs={12} sm={6}>
          <Form.Label htmlFor="sort-select" className="me-2">
            Sort By:
          </Form.Label>
          <Form.Control
            as="select"
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price">Price (Low to High)</option>
            <option value="year">Year (Old to New)</option>
            <option value="mileage">Mileage (Low to High)</option>
            <option value="distance">Distance (Low to High)</option>
            <option value="make">Make (A-Z)</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={6} className="mt-2 mt-sm-0">
          <Form.Check
            type="switch"
            id="reverse-sort"
            label="Reverse Sort"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SortControls;
