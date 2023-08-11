import { Elements } from './Element';

export class Deliverable {
  id: string;
  name: string;
  startDate: string;
  elements: Elements;

  constructor(id: string, name: string, startDate: string, elements: Elements) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.elements = elements;
  }

  toPlainObject(): any {
    return {
      id: this.id,
      name: this.name,
      startDate: this.startDate,
      elements: this.elements.map(element => element.toPlainObject()),
    };
  }
}

export type Deliverables = Deliverable[];
