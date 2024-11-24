import { useState } from "react"
import { Car } from "../../interfaces"
import { getAICarInfo } from "../../services/cars"

interface IAITipsProps {
  car: Car
}

const AITips = ({ car }: IAITipsProps) => {
  const [AIResponse, setAIResponse] = useState<string>('')

  const showCarInfo = async (car: Car) => {
    setAIResponse('');
    
    try {
      await getAICarInfo(car, setAIResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="ai-response">
      <button className="btn btn-primary" onClick={() => showCarInfo(car)}>Get Tips by Gemini AI</button>
      <p>{AIResponse.split('\n').map((line, index) => (
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
                              </span>))}</p>
    </div>
  )
}

export default AITips