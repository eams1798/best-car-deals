import { Form, Row, Col } from 'react-bootstrap';

interface ISortControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  reversedSort: boolean;
  setReversedSort: (value: boolean) => void;
}

const SortControls = ({ sortBy, setSortBy, reversedSort, setReversedSort }: ISortControlsProps) => {
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
            <option value="default">Best Match</option>
            <option value="price">Price (Low to High)</option>
            <option value="year">Year (New to Old)</option>
            <option value="mileage">Mileage (Low to High)</option>
            <option value="distance">Distance (Low to High)</option>
            <option value="date">Date (New to Old)</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={6} className="mt-2 mt-sm-0">
          <Form.Check
            type="switch"
            id="reverse-sort"
            label="Reverse Sort"
            checked={reversedSort}
            onChange={() => setReversedSort(!reversedSort)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SortControls;
