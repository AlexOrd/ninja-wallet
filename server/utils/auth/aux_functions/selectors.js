const User = require("../../../models/user.model");
const { authErrors } = require("../errors");

exports.findUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    return { err: authErrors.USER_NOT_FOUND, user: null };
  }

  return { err: null, user };
};

exports.getDeviceByID = (user, id) => {
  const deviceObject = user.auth.openedOnDevices.id(id);
  if (!deviceObject) return { err: authErrors.ACCESS_DENIED };

  return { deviceObject };
};



