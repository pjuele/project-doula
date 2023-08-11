import { Projects } from './Project';
import { HumanAssets } from './HumanAsset';

export type AppDefaults = {
    hourlyCost: number;
    currencyISO: string;
    hoursPerDay: number;
    daysPerWeek: number;    
}

export type WBSData = {
  ok: boolean;
  appDefaults: AppDefaults;
  humanAssets: HumanAssets;
  projects: Projects;

}