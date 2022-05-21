const typeorm = require("typeorm");

const database = async () => {
  let connection = await typeorm.createConnection();
  if (connection) {
    console.log("database online");
  }
  return connection;
};

module.exports = database();
