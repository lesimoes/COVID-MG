class BaseService {
  constructor ({ repository }) {
    this.repository = repository;
  }

  async create (item) {
    return this.repository.create(item);
  }

  async findOnde (id) {
    return this.repository.findOnde(id);
  }

  async findAll (query) {
    return this.repository.findAll(query);
  }
}

module.exports = BaseService;
