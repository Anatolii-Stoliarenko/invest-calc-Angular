import { Injectable } from "@angular/core";
import { InvestementInput, InvestmentResult } from "./investment-input.model";

@Injectable({
  providedIn: "root",
})
export class InvestmentService {
  private result?: InvestmentResult[];
  calculateInvestmentResults(data: InvestementInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.result = annualData;
  }

  get results() {
    return this.result;
  }
}
