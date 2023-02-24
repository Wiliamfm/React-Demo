import { ReactElement } from "react";
import { trips as tripList } from "../../data/data";


function Trip({ trip }: {
   trip: {
      id: string,
      title: string,
      description: string,
      level: string,
      duration: number,
      price: number,
      image: string,
      createdAt: string
   }
}) {
   return <li data-test-id="trip-card" className="trip-card">
      <img data-test-id="trip-card-image" src={trip.image} alt="trip" />
      <div className="trip-card__content">
         <div className="trip-info">
            <h3 data-test-id="trip-card-title" className="trip-info__title">
               {trip.title}
            </h3>
            <div className="trip-info__content">
               <span data-test-id="trip-card-duration" className="trip-info__duration">
                  <strong>{trip.duration}</strong> days
               </span>
               <span data-test-id="trip-card-level" className="trip-info__level">
                  {trip.level}
               </span>
            </div>
         </div>
         <div className="trip-price">
            <span>Price</span>
            <strong data-test-id="trip-card-price-value" className="trip-price__value">
               {trip.price} $
            </strong>
         </div>
      </div>
      <a data-test-id="trip-card-link" href="./trip.html" className="button">
         Discover a trip
      </a>
   </li>
}

function Trips({ trips }: { trips: typeof tripList }) {
   const ts: ReactElement[] = [];
   trips.forEach(trip => {
      ts.push(<Trip trip={trip} key={trip.id} />)
   });

   return <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
         {ts}
      </ul>
   </section>
}

export default Trips;