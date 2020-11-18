export interface TransportOptions {
  body: string;
  // etc,
}

export interface ApiResponse {
  code: number;
  errorMessage?: string;
  responseBody?: string;
  // etc.
}

export interface ApiTransport {
  fetch: (url: string, options: TransportOptions) => Promise<ApiResponse>;
}
