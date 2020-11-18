import HttpTransport from './transports/http';
import { ApiTransport } from './transports/interfaces';

export interface User {
  id: string;
  name: string;
  email: string;
  // etc
}

export default class ApiClient {
  constructor(private transport: ApiTransport) {}

  public async fetchUser(userId: string): Promise<User> {
    const body = JSON.stringify({ userId });
    const response = await this.transport.fetch(
      'http://api.example.com/users',
      { body },
    );

    if (response.code !== 200) {
      throw new Error(
        `Error fetching user! ${response.code} - ${response.errorMessage}`,
      );
    }

    if (!response.responseBody) {
      throw new Error(`No response returned for this user!`);
    }

    return JSON.parse(response.responseBody) as User;
  }
}
