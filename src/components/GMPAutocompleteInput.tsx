import { forwardRef, useEffect } from 'react'
import { Form } from 'react-bootstrap';

const GMPAutocompleteInput = forwardRef((_, ref: any) => {
  useEffect(() => {
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
  })

  return (
    <Form.Control
      ref={ref}
      id="autocomplete-city-code"
      type="text"/>
  )
})

export default GMPAutocompleteInput