import { useQuery } from "@tanstack/react-query"
import { Car, FoundCar } from "../../interfaces"
import { getOneFBCar } from "../../services/cars"
import InfoTooltip from "../InfoToolTip"
import AITips from "./AITips"

const loadingMessage = "If it's not loading, go to other tab, go back this tab again and then wait for a few seconds"

const FBCarElement = ({currentCar}: {currentCar?: FoundCar}) => {
  const result = useQuery({
    queryKey: ['car'],
    queryFn: () => getOneFBCar(currentCar?.url as string),
  })

  if (result.isLoading) {
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <a href={currentCar?.url} target="_blank">Contact with seller</a>
        <p>Loading... <InfoTooltip message={loadingMessage} /></p>
      </div>)
  }

  if (result.isError) {
    return <p>Error: {result.error.message}</p>
  }

  const car = result.data as Car

  const styleImg: React.CSSProperties = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  }

  return (
    <div className="one-car-element" onClick={(e) => e.stopPropagation()}>
      <a href={currentCar?.url} target="_blank">Contact with seller</a>
      <p>{car.title} <InfoTooltip message={loadingMessage} /></p>
      <img src={car.image} alt={car.title} style={styleImg} />
      {car.location ? <p>Location: {car.location}</p> : null}
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} mi</p>
      {car.owners ? <p>{car.owners} owner(s)</p> : null}
      {car.transmission ? <p>Transmission: {car.transmission}</p> : null}
      {car.fuelType ? <p>Fuel type: {car.fuelType}</p> : null}
      {car.safetyRate ? <p>NHTSA Safety rating: {car.safetyRate}</p> : null}
      {car.exteriorColor ? <p>Exterior color: {car.exteriorColor}</p> : null}
      {car.interiorColor ? <p>Interior color: {car.interiorColor}</p> : null}
      {car.MPG && (car.MPG.city || car.MPG.highway || car.MPG.combined) ? (
        <ul>
          MPG:
          {car.MPG.city ? <li>City: {car.MPG.city}</li> : null}
          {car.MPG.highway ? <li>Highway: {car.MPG.highway}</li> : null}
          {car.MPG.combined ? <li>Combined: {car.MPG.combined}</li> : null}
        </ul>
      ) : null}
      {car.description ? <p>Description: <br/> {
                              car.description?.split('\n')
                                 .map((line, index) => <span key={index}>
                                 {line.includes("**") ?
                                 line.split('**').map((chunk, index) => {
                                   if (index === 1) {
                                     return <b key={index}>{chunk}</b>;
                                   }
                                   return `${chunk}`
                                 })
                                 : line}
                                 <br/>
                               </span>)}</p> : null}

      { currentCar?.title === car.title ? 
        <AITips car={car} /> : null
      }
    </div>
  )
}

export default FBCarElement