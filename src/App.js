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
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState();
  const [adviceNumber, setAdviceNumber] = useState();
  const [newadvice, setNewAdvice] = useState(false);

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then(function (response) {
      setAdvice(response.data.slip.advice);
      setAdviceNumber(response.data.slip.id);
    });
  }, [newadvice]);

  function handleClick() {
    setNewAdvice((old) => !old);
  }

  return (
    <AppBox className="App">
      <AdviceBox>
        <AdviceNo>ADVICE #{adviceNumber}</AdviceNo>
        <Advice>{advice}</Advice>
        <Dividers>
          <PatternDivider />
          <MobilePatternDivider />
        </Dividers>
        <DiceBox>
          <IconDice onClick={handleClick} />
        </DiceBox>
      </AdviceBox>
    </AppBox>
  );
}

export default App;
