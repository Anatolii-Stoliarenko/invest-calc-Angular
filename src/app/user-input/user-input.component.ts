import { Component, inject } from "@angular/core";

import { InvestementInput } from "../investment-input.model";
import { InvestmentService } from "../investment.service";

@Component({
  selector: "app-user-input",
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  investService = inject(InvestmentService);

  enteredInitialInvestment = "0";
  enteredAnnualInvestment = "0";
  enteredExpectedReturn = "0";
  enteredDuration = "0";

  onSubmit() {
    const data: InvestementInput = {
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    };
    this.investService.calculateInvestmentResults(data);
  }
}
