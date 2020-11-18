import ApiClient, { User } from '.';
import { internet, name, random } from 'faker';
import { ApiResponse, ApiTransport } from './transports/interfaces';

describe('ApiClient', () => {
  let transport: ApiTransport;
  let client: ApiClient;
  let userId: string;
  let user: User;
  let mockFetch: jest.Mock;
  let mockResponse: ApiResponse;
  let response: User;

  beforeEach(async () => {
    userId = random.uuid();
    user = {
      email: internet.email(),
      id: userId,
      name: `${name.firstName()} ${name.lastName()}`,
    };
    mockResponse = {
      code: 200,
      responseBody: JSON.stringify(user),
    };
    mockFetch = jest.fn(() => mockResponse);
    transport = {
      fetch: mockFetch,
    };

    client = new ApiClient(transport);

    response = await client.fetchUser(userId);
  });

  it('calls the transport `fetch` method', () => {
    expect(mockFetch).toHaveBeenCalledWith('http://api.example.com/users', {
      body: JSON.stringify({ userId }),
    });
  });

  it('calls the tranport once', () => {
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it('returns the user object', () => {
    expect(response).toEqual(user);
  });
});
