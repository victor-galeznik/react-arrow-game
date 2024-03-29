import TypographyText from "../../../../../UI/TypographyText"

import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congrats!
          <br />
          You win!
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets.
          <br />
          You have lost this game.
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
