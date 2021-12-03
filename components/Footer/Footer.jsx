import styles from "./Footer.module.css"

function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.searchBar}>
				<label htmlFor="searchInput">
					<input type="text" id="searchInput"></input>
				</label>
			</div>

			<div className={styles.links}></div>
			<div className={styles.logoAndSocials}></div>
		</footer>
	)
}

export default Footer
