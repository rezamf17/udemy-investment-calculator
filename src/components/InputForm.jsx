import React, { useState } from "react"
import Table from "./Table"

export default function InputForm() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [annualInvestment, setAnnualInvestment] = useState(1200)
  const [expectedReturn, setExpectedReturn] = useState(6)
  const [duration, setDuration] = useState(10)

  const formProps = {
    initialInvestment: parseInt(initialInvestment),
    annualInvestment: parseInt(annualInvestment),
    expectedReturn: parseInt(expectedReturn),
    duration: parseInt(duration)
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input type="number" name="initialInvestment" value={initialInvestment} onInput={(e) => setInitialInvestment(e.target?.value)} />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" name="annualInvestment" value={annualInvestment} onInput={(e) => setAnnualInvestment(e.target?.value)} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number" name="expectedReturn" value={expectedReturn} onInput={(e) => setExpectedReturn(e.target?.value)} />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" name="duration" value={duration} onInput={(e) => setDuration(e.target?.value)} />
          </p>
        </div>
      </section>
      {formProps.duration <= 1 ? <table id="result">Please input correct number..</table> : <Table form={formProps} />}
      
    </>
  )
}