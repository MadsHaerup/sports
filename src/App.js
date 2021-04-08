import "./App.scss";
import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Tailored from "./components/Tailored/Tailored";
import Slider from "./components/Tweet/Slider";

function App() {
	return (
		<>
			<Tailored />
			<Experience />
			<Banner />
			<Slider/>
			<Footer />
		</>
	);
}

export default App;
