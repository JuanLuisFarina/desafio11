import mongoose from "mongoose";

export default class MongoContainer {
  constructor(collectionName, schema) {
    this.collection = mongoose.model(collectionName, schema);
  }

  async getAll() {
    try {
      return await this.collection.find({});
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(id) {
    try {
      return await this.collection.find({ _id: id });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteById(id) {
    try {
      await this.collection.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async save(product) {
    try {
      return await this.collection.create(product);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
