import { useState } from 'react'
/* import { Link } from 'react-router-dom'
 */
const MainPage = () => {
  const [searchType, setSearchType] = useState<string>("person")
  const [carType, setCarType] = useState<string>("auto")
  const [location, setLocation] = useState<string>("")

	const changeSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchType(e.target.value)
	}
	const changeCarType = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCarType(e.target.value)
	}

  return (
		<div>
			<h1>Best car deal finder</h1>
{/*       <div>
        <Link to="/marketplace">Goto Marketplace</Link>
      </div>
      <div>
        <Link to="/dealers">Goto Dealers</Link>
      </div> */}
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
						type="radio"
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
      <div>
        <p>Write your zip code or city</p>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}/>
        <input type="submit"/>
      </div>
		</div>
  )
}

export default MainPage
