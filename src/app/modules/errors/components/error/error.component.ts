import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ErrorModel } from "../../../../services/error/model/error-model";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  @Input() error!: ErrorModel;

  constructor() {}
}
