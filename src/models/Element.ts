export class Element {
    id: string;
    name: string;
    hours: number;
    who: any;
  
    constructor(id: string, name: string, hours: number, who: any) {
      this.id = id;
      this.name = name;
      this.hours = hours;
      this.who = who;
    }

    toPlainObject(): any {
      return {
        id: this.id,
        name: this.name,
        hours: this.hours,
        who: this.who
      };
    }
  }
  
export type Elements = Element[];