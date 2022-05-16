import React from "react"

export default function Card(props){
    console.log(props)
    return(
        <div className="card-container">
            <div className="main-container">
                <header>
                    <img src={props.item.imageUrl} className="destination-photo" />
                </header>
                <div className="details-container">
                    <div className="location-header">

                        <p className="country-name">{props.item.location}</p>
                        <p className="google-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <div className="country-details">
                    <h3>{props.item.title}</h3>
                    <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="description">
                        {props.item.description}
                    </p>
                    </div>
                </div>
          </div>
        </div>
    )
}