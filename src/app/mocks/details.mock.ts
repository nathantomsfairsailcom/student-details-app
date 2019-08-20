import { DetailsModel } from 'src/app/models';

const getDefaults = (): DetailsModel => ({
  name: 'Professor',
  email: 'prof@planetexpress.com',
  degreeTitle: 'Advanced Astrodynamics',
  currentYearOfStudy: 70
});

export const getDetailsMock = (details?: Partial<DetailsModel>): DetailsModel => ({
  ...getDefaults(),
  ...details
});
