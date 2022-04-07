import logger from '../src/config/logger.js';
import associateModels from '../src/config/associate-models.js';
import Warehouse from '../src/warehouse/warehouse.model.js';
import Employee from '../src/employee/employee.model.js';
import Role from '../src/employee/role.model.js';
import User from '../src/api/author/author.model.js';
import Address from '../src/shared/address/address.model.js';
import db from '../src/config/db.js';

export const warehouses = [
  {
    name: 'Rubber Duck House - Allen',
    image:
      'https://images1.showcase.com/i2/SxZg5wYtGSSOkEIN7pIRSk_W88kZa2t3FV1FcVR27ZI/116/image.jpg',
    numberOfAisles: 6,
    numberOfBays: 8,
    numberOfLevels: 4,
    addressId: 1,
  },
  {
    name: 'Rubber Duck House - Plano',
    image:
      'https://images1.showcase.com/i2/AFgeoB14yv5WUsI7JlgfGhL4lBXaI9DlHT_7PIyY-Qs/116/image.jpg',
    numberOfAisles: 12,
    numberOfBays: 16,
    numberOfLevels: 4,
    addressId: 2,
  },
  {
    name: 'Rubber Duck House - Dallas',
    image:
      'https://images1.showcase.com/i2/DBxjh1pwbylNAo03bVPLpIPhDrhS8M_J4j6yi47UOng/116/image.jpg',
    numberOfAisles: 3,
    numberOfBays: 2,
    numberOfLevels: 2,
    addressId: 3,
  },
  {
    name: 'Rubber Duck House - Richardson',
    image:
      'https://images1.showcase.com/i2/xtAqeYpnXNVQtnQEZAe5W0dBUbUJmLlGtdW7w68fT0I/116/image.jpg',
    numberOfAisles: 2,
    numberOfBays: 3,
    numberOfLevels: 3,
    addressId: 4,
  },
  {
    name: 'Rubber Duck House - Bedford',
    image:
      'https://images1.showcase.com/i2/VVnaVfhp7R22ce81I4XFi3PJU4VhhZEXeicUYBoFQSQ/116/image.jpg',
    numberOfAisles: 4,
    numberOfBays: 6,
    numberOfLevels: 3,
    addressId: 5,
  },
];

export const employees = [
  {
    firstName: 'Mark',
    lastName: 'Warner',
    email: 'm.warner@rubber-duck-house.com',
    addressId: 6,
    roleId: 1,
    worksiteId: 1,
  },
  {
    firstName: 'Raven',
    lastName: 'Redix',
    email: 'r.redix@rubber-duck-house.com',
    addressId: 7,
    roleId: 2,
    worksiteId: 2,
  },
  {
    firstName: 'Mo',
    lastName: 'Kasem',
    email: 'm.kasem@rubber-duck-house.com',
    addressId: 8,
    roleId: 2,
    worksiteId: 3,
  },
  {
    firstName: 'James',
    lastName: 'Smith',
    email: 'j.smiths@rubber-duck-house.com',
    addressId: 9,
    roleId: 2,
    worksiteId: 4,
  },
  {
    firstName: 'Cindy',
    lastName: 'Smith',
    email: 'c.smiths@rubber-duck-house.com',
    addressId: 9,
    roleId: 2,
    worksiteId: 4,
  },
  {
    firstName: 'Jimmy',
    lastName: 'Doe',
    email: 'j.doe@rubber-duck-house.com',
    addressId: 10,
    roleId: 2,
    worksiteId: 4,
  },
];

export const roles = [
  {
    title: 'manager',
  },
  {
    title: 'operator',
  },
];

export const users = [
  {
    username: 'mark',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: true,
    employeeId: 1,
  },
  {
    username: 'raven',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: false,
    employeeId: 2,
  },
  {
    username: 'kasem',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: false,
    employeeId: 3,
  },
  {
    username: 'james',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: false,
    employeeId: 4,
  },
  {
    username: 'cindy',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: false,
    employeeId: 5,
  },
  {
    username: 'jimmy',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    isAdmin: false,
    employeeId: 6,
  },
];

export const addresses = [
  {
    streetAddress1: '123 Main Street',
    city: 'Allen',
    state: 'TX',
    postalCode: 75013,
  },
  {
    streetAddress1: '2035 Ridgemont Dr',
    city: 'Plano',
    state: 'TX',
    postalCode: 75025,
  },
  {
    streetAddress1: '9323 Amberton Pkwy',
    city: 'Dallas',
    state: 'TX',
    postalCode: 75243,
  },
  {
    streetAddress1: '919 S Weatherred Dr',
    city: 'Richardson',
    state: 'TX',
    postalCode: 75044,
  },
  {
    streetAddress1: '4321 E Bay Street',
    streetAddress2: 'Bldg 2',
    city: 'Bedford',
    state: 'TX',
    postalCode: 76021,
  },
  {
    streetAddress1: '6321 Commerce Street',
    streetAddress2: 'Apt 225',
    city: 'Allen',
    state: 'TX',
    postalCode: 75002,
  },
  {
    streetAddress1: '9356 Rudder Dr',
    city: 'Irving',
    state: 'TX',
    postalCode: 75039,
  },
  {
    streetAddress1: '1723 Pond Strret',
    city: 'Richardson',
    state: 'TX',
    postalCode: 75081,
  },
  {
    streetAddress1: '543 Hilltop Dr',
    city: 'Bedford',
    state: 'TX',
    postalCode: 76021,
  },
  {
    streetAddress1: '156 Hidden Cove Road',
    city: 'Irving',
    state: 'TX',
    postalCode: 75039,
  },
];

const seed = async force => {
  try {
    await associateModels();
    await db.sync({ force });
    await Address.bulkCreate(addresses, { validate: true });
    await Warehouse.create(warehouses[0]);
    await Warehouse.create(warehouses[1]);
    await Warehouse.create(warehouses[2]);
    await Warehouse.create(warehouses[3]);
    await Warehouse.create(warehouses[4]);
    await Role.bulkCreate(roles, { validate: true });
    await Employee.bulkCreate(employees, { validate: true });
    await User.bulkCreate(users, { validate: true });
    if (process.env.NODE_ENV !== 'test') {
      await db.close();
      logger.log({ level: 'info', message: 'Database seeded successfully' });
    }
  } catch (error) {
    await db.close();
    logger.log({
      level: 'error',
      message: `Database seeding failed: ${error.message}`,
    });
  }
};

export default seed;
