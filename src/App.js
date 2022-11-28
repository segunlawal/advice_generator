import {
  AppBox,
  AdviceBox,
  AdviceNo,
  Advice,
  DiceBox,
  Dividers,
} from "./Mystyles";
import { ReactComponent as PatternDivider } from "./assets/pattern-divider-desktop.svg";
import { ReactComponent as MobilePatternDivider } from "./assets/pattern-divider-mobile.svg";
import { ReactComponent as IconDice } from "./assets/icon-dice.svg";

function App() {
  return (
    <AppBox className="App">
      <AdviceBox>
        <AdviceNo>ADVICE #117</AdviceNo>
        <Advice>
          "The boy that went home isn't the boy that came back. Gibberish
          placeholder advice from yours truly. Next level waffle."
        </Advice>
        <Dividers>
          <PatternDivider />
          <MobilePatternDivider />
        </Dividers>
        <DiceBox>
          <IconDice />
        </DiceBox>
      </AdviceBox>
    </AppBox>
  );
}

export default App;
