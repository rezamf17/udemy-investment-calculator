import React, { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Table({form}) {
  const [results, setResults] = useState([])
  useEffect(() => {
    setResults(calculateInvestmentResults(form))
  }, [form])
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
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
              <td>{formatter.format(result.interest * 3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}