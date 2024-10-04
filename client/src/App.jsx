import AddUser from "./addUser/AddUser"
import User from "./getUser/User"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Update from "./updateUser/Update"
import DeleteUser from "./delete/DeleteUser"


function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<AddUser/>
    },
    {
      path:"/update/:id",
      element:<Update/>
    },
    {
      path:"/delete/:id",
      element:<DeleteUser/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
