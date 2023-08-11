import { Deliverables } from './Deliverable';
import { Deliverable } from './Deliverable';
import { Element, Elements } from './Element';

export type Projects = Project[];

export class Project {
  id: string;
  name: string;
  deliverables: Deliverables;

  constructor(id: string, name: string, deliverables: Deliverables) {
    this.id = id;
    this.name = name;
    this.deliverables = deliverables;
  }

  toPlainObject(): any {
    return {
      id: this.id,
      name: this.name,
      deliverables: this.deliverables.map(deliverable => deliverable.toPlainObject())
    };
  }
}

export function createProjectFromJSON(jsonData: any): Project {
  const { id, name, deliverables } = jsonData;
  
  const projectDeliverables: Deliverable[] = deliverables.map((deliverable: any) => {
    const { id: deliverableId, name: deliverableName, startDate, elements } = deliverable;

    const deliverableElements: Elements = elements.map((element: any) => {
      const { id: elementId, name: elementName, hours, who } = element;
      return new Element(elementId, elementName, hours, who);
    });

    return new Deliverable(deliverableId, deliverableName, startDate, deliverableElements);
  });

  return new Project(id, name, projectDeliverables);
}
