import "./App.scss";
import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Tailored from "./components/Tailored/Tailored";
import Team from "./components/Team/Team";
import Slider from "./components/Tweet/Slider";

function App() {
	return (
		<>
			<Tailored />
			<Experience />
			<Features/>
			<Slider/>
			<Banner />
			<Team/>
			<Footer />
		</>
	);
}

export default App;
