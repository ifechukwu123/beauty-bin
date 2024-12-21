import { Link } from "react-router-dom";
import inventorySticker from "../../assets/stickers/inventory.svg";
import addSticker from "../../assets/stickers/addNew.svg";
import wishlistSticker from "../../assets/stickers/wishlist.svg";
import aboutSticker from "../../assets/stickers/about.svg";
import "./Home.scss";

export default function Home() {
	return (
		<main className="homepage">
			<div className="homepage__sticker-container homepage__sticker-container--one">
				<Link to="products" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--inventory">
						<img
							src={inventorySticker}
							alt="A decoration sticker"
							className="homepage__sticker homepage__sticker--inventory"
						/>
						<span className="homepage__sticker-text homepage__sticker-text--inventory">
							inventory
						</span>
					</div>
				</Link>
				<Link to="wishlist" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--wishlist">
						<img
							src={wishlistSticker}
							alt="A decoration sticker"
							className="homepage__sticker homepage__sticker--wishlist"
						/>
						<span className="homepage__sticker-text homepage__sticker-text--wishlist">
							wishlist
						</span>
					</div>
				</Link>
			</div>
			<div className="homepage__slogan">
				<h1 className="homepage__slogan-title">creating time</h1>
				<span className="homepage__slogan-title--accent">for fun</span>
			</div>

			<div className="homepage__sticker-container homepage__sticker-container--two">
				<Link to="products/add" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--add">
						<img
							src={addSticker}
							alt="A decoration sticker"
							className="homepage__sticker homepage__sticker--add"
						/>
						<span className="homepage__sticker-text homepage__sticker-text--add">
							add new
						</span>
					</div>
				</Link>

				<Link to="about" className="homepage__link">
					<div className="homepage__sticker-wrapper homepage__sticker-wrapper--about">
						<img
							src={aboutSticker}
							alt="A decoration sticker"
							className="homepage__sticker homepage__sticker--about"
						/>
						<span className="homepage__sticker-text homepage__sticker-text--about">
							about
						</span>
					</div>
				</Link>
			</div>
		</main>
	);
}
