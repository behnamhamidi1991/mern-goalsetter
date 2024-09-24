// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.status(201).json({ message: "Register user" });
};

module.exports = {
  registerUser,
};

// @desc    Authenticate a user
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
  res.status(200).json({ message: "Login user" });
};

module.exports = {
  registerUser,
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = (req, res) => {
  res.status(200).json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
