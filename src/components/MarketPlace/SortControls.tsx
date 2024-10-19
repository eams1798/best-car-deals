import { Form, Row, Col } from 'react-bootstrap';
import { DefaultCarFilters } from '../../interfaces';

interface ISortControlsProps {
  filters: DefaultCarFilters;
  setFilters: (value: React.SetStateAction<DefaultCarFilters>) => void;
}

const SortControls = ({ filters, setFilters }: ISortControlsProps) => {
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
            defaultValue={"default"}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
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
            defaultChecked={false}
            onChange={(e) => setFilters({ ...filters, reversed_sort: e.target.checked })}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SortControls;
