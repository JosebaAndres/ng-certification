import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-location-item-error",
  templateUrl: "./location-item-error.component.html",
  styleUrls: ["./location-item-error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationItemErrorComponent {
  @Input() zipCode!: string;
  @Output() remove = new EventEmitter<void>();
  @Output() reload = new EventEmitter<void>();

  constructor() {}

  emitRemove() {
    this.remove.emit();
  }

  emitReload() {
    this.reload.emit();
  }
}
