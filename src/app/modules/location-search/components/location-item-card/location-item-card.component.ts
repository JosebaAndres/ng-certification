import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-location-item-card",
  templateUrl: "./location-item-card.component.html",
  styleUrls: ["./location-item-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationItemCardComponent {
  @Output() remove = new EventEmitter<void>();

  constructor() {}

  emitRemove() {
    this.remove.emit();
  }
}
