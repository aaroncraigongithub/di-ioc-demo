import { ApiResponse, ApiTransport, TransportOptions } from './interfaces';

export default class HttpTransport implements ApiTransport {
  public async fetch(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _url: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _options: TransportOptions,
  ): Promise<ApiResponse> {
    const response: ApiResponse = {
      code: 200,
    };
    // eg. fetch(...);

    return response;
  }
}
