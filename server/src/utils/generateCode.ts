import crypto from 'crypto';

const generateCode = () => {
  return crypto.randomBytes(3).toString('base64').substring(0, 6);
};

export {generateCode};
