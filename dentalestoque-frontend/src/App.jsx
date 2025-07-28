import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./routes"

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<RoutesApp/>
			</BrowserRouter>
		</div>
	);
}


export default App;
