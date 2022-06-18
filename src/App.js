import "./App.css";
import Header from "./components/Header";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<CampsitesDirectoryPage />
			<Footer />
		</div>
	);
}

export default App;
