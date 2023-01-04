import { MouseEventHandler } from "react";

interface ConfigureResultProps {
  handleCalculateSavings: MouseEventHandler<HTMLButtonElement>;
}

export default function ConfigureResult({
  handleCalculateSavings,
}: ConfigureResultProps) {
  return (
    <>
      <button onClick={handleCalculateSavings}>
        &#x2190; Update Your Current Debts
      </button>
      <div className="box">
        <div className="sliders">
          <h2>Configure Your Consolidated Loan</h2>
          <p>Use the sliders below to simulate the new APR and loan term.</p>
          <div className="slider-one">
            <label htmlFor="desired-apr">
              <span>Desired APR</span>
              <span>8.00%</span>
            </label>
            <input
              type="range"
              id="desired-apr"
              name="desired-apr"
              min="4"
              max="36"
              defaultValue={8}
            />
          </div>
          <div className="slider-two">
            <label htmlFor="desired-loan-term">
              <span>Desired Loan Term</span>
              <span>24 months</span>
            </label>

            <input
              type="range"
              id="desired-loan-term"
              name="desired-loan-term"
              min="12"
              max="60"
              defaultValue={24}
            />
          </div>
        </div>
        <div className="total-repayment">
          <div className="new">
            <span>New Total Repayment</span>
            <span>$6,513</span>
          </div>
          <div className="current">
            <span>Current Total Repayment</span>
            <span>$6,750</span>
          </div>
          <div className="savings">
            <span>Total Repayment Savings</span>
            <span>$237</span>
          </div>
        </div>
        <div className="monthly-repayment">
          <div className="new">
            <span>New Monthly Payment</span>
            <span>$271.36</span>
          </div>
          <div className="current">
            <span>Current Monthly Repayment</span>
            <span>$450</span>
          </div>
          <div className="savings">
            <span>Total Monthly Savings</span>
            <span>$178.64</span>
          </div>
        </div>
      </div>
    </>
  );
}
