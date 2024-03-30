import Playground from "./components/Playground"
import styles from "./App.module.css"
import Header from "./components/Playground/components/Header/Header"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.app_wrapper}>
        <Playground />
      </div>
    </>
  )
}

export default App
