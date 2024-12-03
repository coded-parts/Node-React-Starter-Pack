export class UserService {
  constructor() {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      {id: 3, name: 'James Smith', email: 'james@example.com'}
    ];
  }

  async getAllUsers() {
    return this.users;
  }

  async getUserById(id) {
    return this.users.find(user => user.id === id);
  }
}