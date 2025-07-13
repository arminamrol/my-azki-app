export interface VehicleUsage {
  id: number;
  title: string;
}

export interface VehicleType {
  id: number;
  title: string;
  usages: VehicleUsage[];
}

export interface InsuranceCompany {
  id: number;
  title: string;
  icon: string;
  description: string;
  satisfaction: number;
  wealthLevel: number;
}
