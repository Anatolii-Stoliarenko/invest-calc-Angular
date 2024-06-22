import { Component, inject } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestementInput } from "./investment-input.model";
import { InvestmentService } from "./investment.service";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent]
})
export class AppComponent {
  investmentService = inject(InvestmentService);

  calculateInvestmentResults(data: InvestementInput) {
    console.log(this.investmentService.calculateInvestmentResults(data));
  }
}
