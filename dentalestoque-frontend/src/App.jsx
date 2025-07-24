import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
	return (
		 <BrowserRouter>
			<RoutesApp/>
		</BrowserRouter>
	);
}


export default App;
