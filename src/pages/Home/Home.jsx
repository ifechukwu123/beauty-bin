import { Link } from "react-router-dom";
import productsSticker from "../../assets/stickers/Products.svg";
import addSticker from "../../assets/stickers/addNew.svg";
import wishlistSticker from "../../assets/stickers/wishlist.svg";
import aboutSticker from "../../assets/stickers/about.svg";
import "./Home.scss";

export default function Home() {
	return (
		<main className="homepage">
			<div className="homepage__slogan">
				<h1 className="homepage__slogan-title">creating time</h1>
				<span className="homepage__slogan-title--accent">for fun</span>
			</div>

			<div className="homepage__sticker-container">
				<Link to="products" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--products">
						<img
							src={productsSticker}
							aria-hidden="true"
							alt=""
							className="homepage__sticker homepage__sticker--products"
						/>
						<h2 className="homepage__sticker-text homepage__sticker-text--products">
							products
						</h2>
					</div>
				</Link>
				<Link to="products/add" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--add">
						<img
							src={addSticker}
							aria-hidden="true"
							alt=""
							className="homepage__sticker homepage__sticker--add"
						/>
						<h2 className="homepage__sticker-text homepage__sticker-text--add">
							add new
						</h2>
					</div>
				</Link>
				<Link to="wishlist" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--wishlist">
						<img
							src={wishlistSticker}
							aria-hidden="true"
							alt=""
							className="homepage__sticker homepage__sticker--wishlist"
						/>
						<h2 className="homepage__sticker-text homepage__sticker-text--wishlist">
							wishlist
						</h2>
					</div>
				</Link>
				<Link to="about" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--about">
						<img
							src={aboutSticker}
							aria-hidden="true"
							alt=""
							className="homepage__sticker homepage__sticker--about"
						/>
						<h2 className="homepage__sticker-text homepage__sticker-text--about">
							about
						</h2>
					</div>
				</Link>
			</div>
		</main>
	);
}
