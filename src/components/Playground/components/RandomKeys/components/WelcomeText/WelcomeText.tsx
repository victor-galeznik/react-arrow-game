import TypographyText from "../../../../../UI/TypographyText"
import loader from "./img/loader.svg"

import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="loader" />
        </span>
      </div>
    )
  }

  return (
    <TypographyText className="typography__text">
      Press "Play" to start the game and wait for the first arrow to appear
    </TypographyText>
  )
}

export default WelcomeText
