const Event = ({Eventleader, EventName,EventTime, EventPlace}) => {
    return(
          <div className="Events-container">
            <div className="Event-header">
                <h3>{Eventleader}</h3>
                <h2>{EventName}</h2>    
            </div>
            <div className="Event-body">
                <p>{EventTime}</p>
                <p>{EventPlace}</p>
                
            </div>

          </div>
    )
}

export default Event;