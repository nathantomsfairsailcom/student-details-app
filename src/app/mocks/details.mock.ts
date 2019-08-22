import { DetailsModel } from 'src/app/models';
import { getWorkLocationMock } from './work-location.mock';

const getDefaults = (): DetailsModel => ({
  name: 'Professor',
  email: 'prof@planetexpress.com',
  degreeTitle: 'Advanced Astrodynamics',
  currentYearOfStudy: 70,
  desiredJobType: 'Professor',
  workLocation: getWorkLocationMock(),
  event: 'The Great Undoing'
});

export const getDetailsMock = (details?: Partial<DetailsModel>): DetailsModel => ({
  ...getDefaults(),
  ...details
});
