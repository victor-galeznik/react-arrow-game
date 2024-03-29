import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader"

import RandomArrows from "./components/RandomArrows"
import WelcomeText from "./components/WelcomeText/WelcomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = (props) => {
  const { isTimerActive } = props

  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <TypographyHeader>Random Keys</TypographyHeader>

      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
