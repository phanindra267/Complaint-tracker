const authMiddleware = (req, res, next) => {
  console.log('[Auth] Auth checked');
  next();
};

export default authMiddleware;
