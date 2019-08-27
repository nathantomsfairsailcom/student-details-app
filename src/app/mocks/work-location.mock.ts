import { WorkLocationModel } from 'src/app/models';

const getDefaults = (): WorkLocationModel => ({
  id: 'good-news',
  officeLocation: 'New New York',
  businessUnit: 'Planet Express'
});

export const getWorkLocationMock = (details?: Partial<WorkLocationModel>): WorkLocationModel => ({
  ...getDefaults(),
  ...details
});
