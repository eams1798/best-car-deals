import { forwardRef, Ref, useEffect } from 'react'
import { Form } from 'react-bootstrap';

const GMPAutocompleteInput = forwardRef((_, ref: Ref<HTMLInputElement | undefined>) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let autocomplete;

    function initMap() {
      autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete-city-code') as HTMLInputElement,
        {
          componentRestrictions: {country: 'us'},
          fields: ['name'],
          types: ['postal_code', 'locality'],
        }
      );
    }

    initMap();
  }, []);

  return (
    <Form.Control
      ref={ref as Ref<HTMLInputElement>}
      id="autocomplete-city-code"
      type="text"/>
  )
})

export default GMPAutocompleteInput