import React, { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Table({ form }) {
  const [results, setResults] = useState([])
  useEffect(() => {
    setResults(calculateInvestmentResults(form))
  }, [form])
  if (results.length === 0) {
    return <table id="result">No Data...</table>
  }
  const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
  console.log('form log', form)
  console.log('result log', results)
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year -  initialInvestment
            const totalAmountInvested = result.valueEndOfYear - totalInterest
            return (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}