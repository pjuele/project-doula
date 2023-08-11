export class HumanAsset {
    id: string;
    name: string;
    hourlyCost: number;
  
    constructor(id: string, name: string, hourlyCost: number) {
      this.id = id;
      this.name = name;
      this.hourlyCost = hourlyCost;
    }

    toPlainObject(): any {
      return {
        id: this.id,
        name: this.name,
        hourlyCost: this.hourlyCost,
      };
    }
  }

  export type HumanAssets = HumanAsset[];