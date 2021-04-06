import "./App.scss";
import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Tailored from "./components/Tailored/Tailored";

function App() {
	return (
		<>
			<Tailored />
			<Experience />
			<Banner />
			<Footer />
		</>
	);
}

export default App;
