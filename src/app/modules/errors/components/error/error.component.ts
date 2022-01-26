import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ErrorModel } from "../../../../services/error/model/error-model";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  @Input() error!: ErrorModel;
  @Output() remove = new EventEmitter<void>();

  constructor() {}

  emitRemove() {
    this.remove.emit();
  }
}
