import './InfoToolTip.css'

const InfoTooltip = ({ message }: { message: string }) => {
  return (
    <div className="tooltip-container">
      <div className="info-circle" aria-label={message} role="img">?</div>
      <span className="tooltip-text">{message}</span>
    </div>
  );
}

export default InfoTooltip