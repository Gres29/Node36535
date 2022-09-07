const mongoose = require("mongoose");

class MongoClient {
  constructor() {
    this.connected = true;
    this.client = mongoose;
  }
  connect = async () => {
    try {
      if (process.env.PERSISTANCE === "MONGO") {
        return await this.client.connect(process.env.MONGO_CONNECTION_STRING, {
          dbName: process.env.MONGO_DATABASE,
        });
      }
    } catch (error) {
      throw `Hubo un error al conectarse al cliente de MongoDB: ${error}`;
    }
  };
}

module.exports = MongoClient;
