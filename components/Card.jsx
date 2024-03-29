import Image from "next/image";
import Link from "next/link";
import cls from "classnames";

import styles from "../styles/card.module.css";

function Card(props) {
	return (
		<Link href={props.href}>
			<a className={styles.cardLink}>
				<div className={cls("glass", styles.container)}>
					<header className={styles.cardHeaderWrapper}>
						<h2 className={styles.cardHeader}>{props.name}</h2>
					</header>
					<div className={styles.cardImageWrapper}>
						<Image
							className={styles.cardImage}
							src={props.imgUrl}
							width={260}
							height={160}
							alt="store location"
						/>
					</div>
				</div>
			</a>
		</Link>
	);
}

export default Card;
