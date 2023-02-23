import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

const router = createBrowserRouter([
   {
      path: "",
      element: <App />,
      errorElement: <div>Error</div>,
      children: [
         {
            path: "/sign-up",
            element: <div>Sign up</div>
         },
         {
            path: "/sign-in",
            element: <div>Sign in</div>
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