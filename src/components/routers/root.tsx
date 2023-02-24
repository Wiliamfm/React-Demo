import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SingUp from "../sign_up/signUp";
import SignIn from "../sign_in/signIn";
import Search from "../search_bar/searchBar";
import Trips from "../trips/trips";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <div>Error</div>,
      children: [
         {
            path: "/sign-up",
            element: <SingUp />
         },
         {
            path: "/sign-in",
            element: <SignIn />
         },
         {
            path: "/trip/:tripId",
            element: <div>trip/:id</div>
         },
         {
            path: "/bookings",
            element: <div>bookings</div>
         },
         {
            path: "/",
            element: <main>
               <Search></Search>
               <Trips></Trips>
            </main>
         },
         {
            path: "*",
            element: <main>
               <Search></Search>
               <Trips></Trips>
            </main>
         }
      ]
   },
])

export default router;