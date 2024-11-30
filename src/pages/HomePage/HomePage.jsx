import { Link } from "react-router-dom";
import productSticker from "../../assets/stickers/Products.svg";
import addSticker from "../../assets/stickers/AddNew.svg";
import wishlistSticker from "../../assets/stickers/Wishlist.svg";
import aboutSticker from "../../assets/stickers/About.svg";
import "./HomePage.scss";

export default function HomePage() {
	return (
		<div className="homepage">
			<div className="homepage__sticker-container">
				<Link to="products" className="homepage__link">
					<img
						src={productSticker}
						alt="A decoration sticker"
						className="homepage__sticker homepage__sticker--products"
					/>
				</Link>
				<Link to="wishlist" className="homepage__link">
					<img
						src={wishlistSticker}
						alt="A decoration sticker"
						className="homepage__sticker homepage__sticker--wishlist"
					/>
				</Link>
			</div>
			<div className="homepage__slogan">
				<h1 className="homepage__slogan-title">creating time</h1>
				<span className="homepage__slogan-title--accent">for fun</span>
			</div>

			<div className="homepage__sticker-container">
				<Link to="products/add" className="homepage__link">
					<img
						src={addSticker}
						alt="A decoration sticker"
						className="homepage__sticker homepage__sticker--add"
					/>
				</Link>

				<Link to="about" className="homepage__link">
					<img
						src={aboutSticker}
						alt="A decoration sticker"
						className="homepage__sticker homepage__sticker--about"
					/>
				</Link>
			</div>
		</div>
	);
}
