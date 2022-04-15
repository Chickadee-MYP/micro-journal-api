import logger from '../src/config/logger.js';
import associateModels from '../src/config/associate-models.js';
import User from '../src/api/user/user.model.js';
import Post from '../src/api/post/post.model.js';
import Comment from '../src/api/comment/comment.model.js';
import Address from '../src/api/address/address.model.js';
import Like from '../src/api/like/like.model.js';
import db from '../src/config/db.js';

export const users = [
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

export const posts = [
  {
    userId: 3,
    content: 'The journey of a thousand miles begins with one step - Lao Tzu',
  },
  {
    userId: 3,
    content: 'Bring presence into whatever you do - Eckhart Tolle',
  },
  {
    userId: 6,
    content:
      'My wife told me to stop impersonating a flamingo. I had to put my foot down.',
  },
  {
    userId: 6,
    content: "I failed math so many times at school, I can't even count.",
  },
  {
    userId: 6,
    content: ' I used to have a handle on life, but then it broke',
  },
  {
    userId: 2,
    content: "Don't think... Become - Blinkous Galadrigal",
  },
  {
    userId: 6,
    content:
      'To the well-organized mind, death is but the next great adventure.- Albus Dumbledore',
  },
  {
    userId: 1,
    content: 'When in doubt, go to the library. - Ron Weasley',
  },
  {
    userId: 4,
    content: 'It takes a lot of balls to golf the way I do.',
  },
  {
    userId: 5,
    content:
      'Fear of a name only increases fear of the thing itself. — Hermione Granger',
  },
  {
    userId: 1,
    content:
      'I could be a morning person — but only if morning started at noon!',
  },
  {
    userId: 3,
    content:
      'What I need is perspective. The illusion of depth, created by a frame, the arrangement of shapes on a flat surface.',
  },
  {
    userId: 1,
    content:
      'I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.',
  },
  {
    userId: 3,
    content:
      "We lived, as usual, by ignoring. Ignoring isn't the same as ignorance, you have to work at it.",
  },
  {
    userId: 1,
    content: 'The early bird catches the worm, but what about the early worm?',
  },
  {
    userId: 5,
    content:
      'It does not do well to dwell on dreams and forget to live. - Albus Dumbledore',
  },
  {
    userId: 5,
    content:
      'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty. - Maya Angelou',
  },
  {
    userId: 1,
    content:
      "Don't you hate it when someone answers their own questions? I do.",
  },
  {
    userId: 6,
    content:
      'I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.',
  },
  {
    userId: 5,
    content:
      'Three Principles for Effective Workplace Communication - 1. Professionalism 2. Clarity 3. Humility.',
  },
  {
    userId: 1,
    content:
      'The future, the present, and the past walked into a bar. Things got a little tense.',
  },
  {
    userId: 3,
    content: 'I know they say that money talks, but all mine says is Goodbye.',
  },
  {
    userId: 2,
    content:
      "Water is the most essential element in life, because without it you can't make coffee.",
  },
  {
    userId: 1,
    content:
      'If the pen is mightier than the sword, a sharpie must be plain deadly!',
  },
];

export const comments = [
  {
    content: 'LOL',
    userId: 5,
    postId: 9,
  },
  {
    content: 'beautiful quote',
    userId: 2,
    postId: 1,
  },
  {
    content: 'mind-blowing',
    userId: 6,
    postId: 17,
  },
  {
    content: 'cannot agree more',
    userId: 5,
    postId: 2,
  },
  {
    content: 'hilarious',
    userId: 3,
    postId: 3,
  },
  {
    content: 'Margaret Atwood is a genius',
    userId: 3,
    postId: 12,
  },
  {
    content: 'The early worm dies U+1F604',
    userId: 1,
    postId: 15,
  },
  {
    content: "I can't live without coffee",
    userId: 2,
    postId: 23,
  },
  {
    content: 'Me too U+1F644',
    userId: 3,
    postId: 23,
  },
  {
    content: 'High-Five Potter-head',
    userId: 2,
    postId: 8,
  },
];

export const likes = [
  {
    likableId: 20,
    likableType: 'post',
    userId: 5,
  },
  {
    likableId: 10,
    likableType: 'comment',
    userId: 2,
  },
  {
    likableId: 1,
    likableType: 'post',
    userId: 2,
  },
  {
    likableId: 6,
    likableType: 'comment',
    userId: 1,
  },
  {
    likableId: 6,
    likableType: 'comment',
    userId: 5,
  },
  {
    likableId: 7,
    likableType: 'comment',
    userId: 3,
  },
  {
    likableId: 1,
    likableType: 'post',
    userId: 4,
  },
  {
    likableId: 8,
    likableType: 'post',
    userId: 4,
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
    await User.bulkCreate(users, { validate: true });
    await Post.bulkCreate(posts, { validate: true });
    await Comment.bulkCreate(comments, { validate: true });
    await Like.bulkCreate(likes, { validate: true });
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
