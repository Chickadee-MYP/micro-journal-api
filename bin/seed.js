import logger from '../src/config/logger.js';
import associateModels from '../src/config/associate-models.js';
import Author from '../src/api/author/author.model.js';
import Address from '../src/api/address/address.model.js';
import db from '../src/config/db.js';



export const authors = [
  {
    username: 'mark',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'Mark',
    lastName: 'Warner',
    email: 'm.warner@myp-api.com',
    addressId: 6,
  },
  {
    username: 'yacob',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'Yacob',
    lastName: 'Dita',
    email: 'y.dita@myp-api.com',
    addressId: 7,
  },
  {
    username: 'preeti',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'Preeti',
    lastName: 'Das',
    email: 'p.das@myp-api.com',
    addressId: 8,
  },
  {
    username: 'james',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'James',
    lastName: 'Smith',
    email: 'j.smiths@myp-api.com',
    addressId: 9,
  },
  {
    username: 'cindy',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'Cindy',
    lastName: 'Smith',
    email: 'c.smiths@myp-api.com',
    addressId: 9,
  },
  {
    username: 'jimmy',
    password: '$2b$10$Dn46iKnUQAshp9PwfacxyuilNmEc7VkxrAp/0cHBGerh1PfRBiUNK',
    firstName: 'Jimmy',
    lastName: 'Doe',
    email: 'j.doe@myp-api.com',
    addressId: 10,
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
    await Author.bulkCreate(authors, { validate: true });
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
