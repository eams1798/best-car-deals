import { useQuery } from "@tanstack/react-query"
import { Car, FoundCar } from "../../interfaces"
import { getOneCLCar } from "../../services/cars"
import InfoTooltip from "../InfoToolTip"
import AITips from "./AITips"

const loadingMessage = "If it's not loading properly, go to another tab, come back to this tab again and wait a few seconds"

const CLCarElement = ({currentCar}: {currentCar?: FoundCar}) => {
  const result = useQuery({
    queryKey: ['car'],
    queryFn: () => getOneCLCar(currentCar?.url as string),
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
      <p>{car.year ?? ''} {car.title} <InfoTooltip message={loadingMessage} /></p>
      <img style={styleImg} src={car.image} alt={car.title} />
      {car.location ? <p>Location: {car.location}</p> : null}
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} mi</p>
      {car.monthlyPayment ? <p>Monthly Payment: ${car.monthlyPayment}</p> : null}
      <p>Transmission: {car.transmission ?? ''}</p>
      <p>Fuel Type: {car.fuelType ?? ''}</p>
      {car.exteriorColor ? <p>Exterior Color: {car.exteriorColor}</p> : null}
      {car.description ? <p>Description: <br/> {
                              car.description?.split('\n')
                                 .map((line, index) => (
                                  <span key={index}>
                                    {line.includes("**") ?
                                    line.split('**').map((chunk, index) => {
                                      if (index === 1) {
                                        return <b key={index}>{chunk}</b>;
                                      }
                                      return `${chunk}`
                                    })
                                    : line}
                                    <br/>
                                  </span>))}</p> : null}
      
      { currentCar?.url === car.url ? 
        <AITips car={car} /> : null
      }
    </div>
  )
}

export default CLCarElement