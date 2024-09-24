import styles from "./footer.module.css"

const Footer = () => {

    const date= new Date()
    const year= date.getFullYear();
    return(
        <>
        <div className={styles.footer}>
            <p className={styles.pfooter}>copy right@{year}</p>
        </div>
        </>
    )
}

export default Footer;