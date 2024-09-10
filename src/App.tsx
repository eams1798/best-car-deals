import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [searchType, setSearchType] = useState<string>("person")
	const [carType, setCarType] = useState<string>("auto")

	const changeSearchType = e => {
		setSearchType(e.target.value)
	}
	const changeCarType = e => {
		setCarType(e.target.value)
	}

  return (
		<div>
			<h1>Best car deal finder</h1>
			<fieldset>
				<legend>Select your provider type:</legend>
				<div>
					<input
						type="radio"
						id="person"
						name="person"
						value="person"
						checked={searchType === "person"}
						onChange={changeSearchType}/>
					<label htmlFor="person">Person</label>
				</div>
				<div>
					<input
						type="radio"
						id="dealer"
						name="dealer"
						value="dealer"
						checked={searchType === "dealer"}
						onChange={changeSearchType} />
					<label htmlFor="dealer">Dealer</label>
				</div>
			</fieldset>

			<fieldset>
				<legend>Select your vehicle type:</legend>
				<div>
          <input
						type="radio"
            id="auto"
            name="auto"
            value="auto"
            checked={carType === "auto"}
            onChange={changeCarType}/>
          <label htmlFor="auto">Auto (Sedan, SUV, Van, etc)</label>
				</div>
				<div>
          <input
						type="pickup"
            id="pickup"
            name="pikup"
            value="pickup"
            checked={carType === "pickup"}
            onChange={changeCarType}/>
					<label htmlFor="pickup">Pickups</label>
        </div>
				<div>
          <input
            type="radio"
            id="rv"
            name="rv"
            value="rv"
            checked={carType === "rv"}
						onChange={changeCarType}/>
					<label htmlFor="rv">Recreational Vehicles</label>
        </div>
			</fieldset>
		</div>
  )
}

export default App
