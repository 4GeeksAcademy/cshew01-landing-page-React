import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const library = [
	{
		image: "https://picsum.photos/id/1/500/325",
		cardTitle: "Coding Time!",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
	{
		image: "https://picsum.photos/id/18/500/325",
		cardTitle: "Relax",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
	{
		image: "https://picsum.photos/id/20/500/325",
		cardTitle: "Study Session",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
	{
		image: "https://picsum.photos/id/130/500/325",
		cardTitle: "Fly Away",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
	{
		image: "https://picsum.photos/id/28/500/325",
		cardTitle: "Let's Go Hiking",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
	{
		image: "https://picsum.photos/id/54/500/325",
		cardTitle: "Blue Skies",
		cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		bottonUrl: "https://www.amazon.com/",
	},
]

//how to make each card the same height?
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container">
            	<div className="row justify-content-center p-1">					
						{library.map((cards) => (
							<Card cards={cards} />
						))}					
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;