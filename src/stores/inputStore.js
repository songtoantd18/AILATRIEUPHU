import { makeObservable, observable, action } from "mobx";
import Input from "./../components/Input";

class InputStore {
  valueName = "";

  constructor() {
    makeObservable(this, {
      valueName: observable,
      handleSubmit: action,
    });
  }

  handleSubmit(valueName) {
    this.valueName = this.valueName;
  }
  get Name() {
    return this.valueName;
  }
}

const inputStore = new InputStore();
export default inputStore;
