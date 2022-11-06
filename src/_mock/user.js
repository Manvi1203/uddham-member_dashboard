import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const users = [...Array(24)].map((_, index) => ({
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.datetime(),
  status: sample(['Done', 'In Progress']),
}));

export default users;
