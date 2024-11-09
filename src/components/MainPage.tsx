import { useRef } from 'react'
import { Form } from 'react-bootstrap'
import { DefaultCarFilters } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { parseLocation } from '../utils/parseLocation';
import GMPAutocompleteInput from './GMPAutocompleteInput';

const MainPage = ({filters, setFilters}: {filters: DefaultCarFilters, setFilters: React.Dispatch<React.SetStateAction<DefaultCarFilters>>}) => {
  const navigate = useNavigate();
  const locationRef = useRef<HTMLInputElement>();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (filters.sellerType && filters.vehicleType) {
      setFilters({
        ...filters,
        location: locationRef.current?.value ? parseLocation(locationRef.current?.value) : undefined
      });
      navigate('/marketplace');
    } else {
      alert('Please select both seller type and vehicle type');
    }
  };

  return (
		<div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }
    }>
			<h1>Best car deal finder</h1>
      <h3 style={{
        color: 'red',
        textAlign: 'center'
        }}>
        Warning!<br/>
        Unfortunately, there are some problems while scraping data from Facebook on production due to Meta restrictions.
        So, the current app will only work scraping Craigslist.<br/>
        Changing the Facebook scraper by another marketplace soon.<br/>
        However, you can still try the development version to skip those problems because the app is not restricted on this mode.
        Just follow the steps
        <a
          href="https://github.com/eams1798/best-car-deals/blob/main/README.md"
          target="_blank"><span style={{color: 'yellow'}}> here.</span>
        </a></h3>
			<fieldset>
				<legend>Select your provider type:</legend>
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
			</fieldset>

			<fieldset>
				<legend>Select your vehicle type:</legend>
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
			</fieldset>
      <div>
        <p>Write your zip code or city</p>
        <GMPAutocompleteInput ref={locationRef} />
        <input type="submit" value="Search" onClick={onSubmit} />
      </div>
		</div>
  )
}

export default MainPage
