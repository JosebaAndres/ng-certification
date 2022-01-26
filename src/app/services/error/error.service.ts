import { Injectable } from "@angular/core";
import { generateRandomId } from "../../utils/generate-random-id";
import { BehaviorSubject } from "rxjs";
import { ErrorModel } from "./model/error-model";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  private errors = new BehaviorSubject<Array<ErrorModel>>([]);

  errors$ = this.errors.asObservable();

  addError(message: string) {
    const newErrors = [...this.errors.value];
    newErrors.push({
      id: generateRandomId(),
      message,
    });
    this.errors.next(newErrors);
  }

  removeError(id: string) {
    const newValue = [...this.errors.value];
    const error = newValue.find((error) => error.id === id);
    if (error) {
      const errorIndex = newValue.indexOf(error);
      newValue.splice(errorIndex, 1);
      this.errors.next(newValue);
    }
  }
}
