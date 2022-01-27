import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-forecast-error",
  templateUrl: "./forecast-error.component.html",
  styleUrls: ["./forecast-error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastErrorComponent {
  @Output() reload = new EventEmitter<void>();

  constructor() {}

  emitReload() {
    this.reload.emit();
  }
}
