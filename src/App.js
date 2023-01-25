import {
  Routes,
  Route,
} from "react-router-dom";
import Mobile from "./pages/mobile";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Mobile />} />
    </Routes>
  );
}
export default App;
