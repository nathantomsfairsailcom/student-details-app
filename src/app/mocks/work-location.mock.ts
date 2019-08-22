import { WorkLocationModel } from 'src/app/models';

const getDefaults = (): WorkLocationModel[] => ([{
  id: 'nostalgic',
  officeLocation: 'Whiteknights',
  businessUnit: 'Fairsail'
}]);

export const getWorkLocationsMock = (details?: Partial<WorkLocationModel[]>): WorkLocationModel[] => ({
  ...getDefaults(),
  ...details
});
