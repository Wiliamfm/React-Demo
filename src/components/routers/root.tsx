import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SingUp from "../sign_up/signUp";
import SignIn from "../sign_in/signIn";
import MainContent from "../main/main";

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
            element: <MainContent />
         },
         {
            path: "*",
            element: <MainContent />
         }
      ]
   },
])

export default router;