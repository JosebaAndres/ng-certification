import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ErrorModel } from "../../../../services/error/model/error-model";
import { ErrorService } from "../../../../services/error/error.service";

@Component({
  selector: "app-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsComponent {
  errors$ = this.errorService.errors$;

  constructor(private errorService: ErrorService) {}

  identify(index: number, item: ErrorModel) {
    return item.id;
  }
}
