import { WorkLocationModel } from './work-location.model';
export interface DetailsModel {
  name: string;
  email: string;
  degreeTitle?: string;
  currentYearOfStudy?: number;
  desiredJobType?: string;
  preferredWorkLocation?: WorkLocationModel;
}
