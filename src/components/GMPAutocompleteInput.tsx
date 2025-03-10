import { forwardRef, Ref, useEffect } from 'react'
import { Form } from 'react-bootstrap';

const GMPAutocompleteInput = forwardRef((_, ref: Ref<HTMLInputElement | undefined>) => {
  useEffect(() => {
    /**
     * Initialize the Google Maps Autocomplete API to allow user to search and select from a list of cities or zipcodes.
     * @see https://developers.google.com/maps/documentation/javascript/places-autocomplete
     */
    function initMap() {
      new google.maps.places.Autocomplete(
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