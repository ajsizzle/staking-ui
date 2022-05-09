import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import StakeDetails from "../components/StakeDetails"
import StakeForm from "../components/StakedForm"

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <StakeDetails />
            <StakeForm />
        </div>
    )
}
