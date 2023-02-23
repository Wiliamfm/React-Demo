import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SignIn from "../sign_in/signIn";
import SingUp from "../sign_up/signUp";

const router = createBrowserRouter([
   {
      path: "",
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
         }
      ]
   },
   {
      path: "*",
      element: <App />
   }
])

export default router;