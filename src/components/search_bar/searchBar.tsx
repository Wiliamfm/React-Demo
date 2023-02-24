import React from "react";
import { trips as tripList } from "../../data/data";

function Search({ trips, tripsHook }: { trips: typeof tripList, tripsHook: React.Dispatch<React.SetStateAction<typeof tripList>> }) {
   const [searchInput, setSearchInput] = React.useState("");
   const [durationSelection, setDurationSelection] = React.useState("");
   const [lvlSelection, setLvlSelection] = React.useState("");

   return <>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
         <h2 className="visually-hidden">Trips filter</h2>
         <form className="trips-filter__form" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <label className="trips-filter__search input">
               <span className="visually-hidden">Search by name</span>
               <input data-test-id="filter-search" name="search" type="search" placeholder="search by title" value={searchInput} onChange={(e) => {
                  setSearchInput(e.target.value)
                  tripsHook(searchTrips());
               }} />
            </label>
            <label className="select">
               <span className="visually-hidden">Search by duration</span>
               <select data-test-id="filter-duration" name="duration" value={durationSelection} onChange={(e) => {
                  setDurationSelection(e.target.value);
                  tripsHook(searchTrips());
               }}>
                  <option value="">duration</option>
                  <option value="0_x_5">&lt; 5 days</option>
                  <option value="5_x_10">&lt; 10 days</option>
                  <option value="10_x">&ge; 10 days</option>
               </select>
            </label>
            <label className="select">
               <span className="visually-hidden">Search by level</span>
               <select data-test-id="filter-level" name="level" value={lvlSelection} onChange={(e) => {
                  setLvlSelection(e.target.value);
                  tripsHook(searchTrips());
               }}>
                  <option value="">level</option>
                  <option value="easy">easy</option>
                  <option value="moderate">moderate</option>
                  <option value="difficult">difficult</option>
               </select>
            </label>
         </form>
      </section>
   </>

   function searchTrips(): typeof trips {
      let re: RegExp;
      let newTrips: typeof trips = [];
      let aux = false;
      if (searchInput) {
         aux = true;
         re = new RegExp(`${searchInput}`, "i");
         newTrips = trips.filter(trip => re.test(trip.title));
         //newTrips.push(...trips.filter(trip => re.test(trip.title)));
      }
      if (durationSelection) {
         aux = true;
         switch (durationSelection) {
            case "0_x_5":
               newTrips.push(...trips.filter(trip => (trip.duration >= 0 && trip.duration <= 5)));
               break;
            case "5_x_10":
               newTrips.push(...trips.filter(trip => (trip.duration > 5 && trip.duration <= 10)));
               break;
            case "10_x":
               newTrips.push(...trips.filter(trip => trip.duration > 10));
               break;
         }
      }
      if (lvlSelection) {
         aux = true;
         re = new RegExp(`${lvlSelection}`, "i");
         newTrips = trips.filter(trip => re.test(trip.level));
         //newTrips.push(...trips.filter(trip => re.test(trip.level)));
      }
      if (!aux) {
         return tripList;
      }
      console.log("WWWW" + lvlSelection + "WWW");
      console.log(newTrips);
      return newTrips;
   }
}

export default Search;
