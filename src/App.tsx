import { Toaster } from "react-hot-toast"
import Router from "./router";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Router />
    </div>
  )
}

export default App;