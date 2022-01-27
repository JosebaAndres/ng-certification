import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-location-item-loading",
  templateUrl: "./location-item-loading.component.html",
  styleUrls: ["./location-item-loading.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationItemLoadingComponent {
  @Input() zipCode!: string;
  @Output() remove = new EventEmitter<void>();

  constructor() {}

  emitRemove() {
    this.remove.emit();
  }
}
