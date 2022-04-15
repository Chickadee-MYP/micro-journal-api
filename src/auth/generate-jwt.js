import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

const generateJwt = user => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
    },
    secretKey,
    {
      expiresIn: '30 days',
    }
  );
  return token;
};

export default generateJwt;
