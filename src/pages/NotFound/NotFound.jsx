import "./NotFound.scss";
import confusedFace from "../../assets/icons/confused-emoji.svg";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	let navigate = useNavigate();

	function handleOnClick() {
		navigate("/");
	}

	return (
		<main className="notFound">
			<div className="notFound-container">
				<div className="notFound__status">
					<span className="notFound__status-text">4</span>
					<img
						src={confusedFace}
						alt="A confused emoji"
						className="notFound__icon"
					/>
					<span className="notFound__status-text">4</span>
				</div>
				<span className="notFound__message">
					Oops, the page you&apos;re looking for doesn&apos;t exist!
				</span>
				<button onClick={handleOnClick} className="notFound__button">
					take me home
				</button>
			</div>
		</main>
	);
}
