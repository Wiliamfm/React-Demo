import React from "react";
import { trips as tripList } from "../../data/data";
import Search from "../search_bar/searchBar";
import Trips from "../trips/trips";

function MainContent() {
   const [trips, setTrips] = React.useState(tripList);

   return <main>
      <Search trips={trips} tripsHook={setTrips}></Search>
      <Trips trips={trips}></Trips>
   </main>
}

export default MainContent;