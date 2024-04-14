import ImgInvestmentCalculator from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <div id="header">
        <img src={ImgInvestmentCalculator} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}