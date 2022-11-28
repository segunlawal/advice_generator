import styled from "styled-components";
export const AppBox = styled.div`
  background: hsl(218, 23%, 16%);
  font-family: "Manrope", sans-serif;
  text-align: center;
  color: hsl(193, 38%, 86%);
  font-weight: 800;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 350px) {
    padding-block: 4rem;
  }
`;
export const AdviceBox = styled.div`
  background: hsl(217, 19%, 24%);
  border-radius: 8px;
  margin-inline: 10rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (max-width: 750px) {
    margin-inline: 5rem;
  }
  @media (max-width: 550px) {
    margin-inline: 1rem;
  }
  @media (max-width: 350px) {
    width: 10rem;
  }
`;
export const AdviceNo = styled.p`
  color: hsl(150, 100%, 66%);
  letter-spacing: 0.3em;
  font-size: 16px;
`;
export const Advice = styled.p`
  font-size: 24px;
`;
export const DiceBox = styled.button`
  background: hsl(150, 100%, 66%);
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -4rem;
  margin-inline: auto;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 40px 1px #0ff;
  }
`;
export const Dividers = styled.div`
  @media (max-width: 350px) {
    display: none;
  }
  @media (max-width: 756px) {
    svg:first-child {
      display: none;
    }
  }
  @media (min-width: 756px) {
    svg:last-child {
      display: none;
    }
  }
`;
