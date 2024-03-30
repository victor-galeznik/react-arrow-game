import TypographyHeader from "../../../UI/TypographyHeader"
import TypographyText from "../../../UI/TypographyText"

const Description: React.FC = () => {
  return (
    <div>
      <TypographyHeader className="typography__text">
        ↑↓→← Arrow-game description
      </TypographyHeader>

      <TypographyText className="typography__text">
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </TypographyText>
      <TypographyText className="typography__text">
        After three consecutive successful hits - game won, after three errors -
        lost.
      </TypographyText>
    </div>
  )
}

export default Description
