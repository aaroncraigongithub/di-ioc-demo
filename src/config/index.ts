export type Worker = (input: string) => string;
export interface Config {
  worker?: Worker;
}

const echo: Worker = (input: string) => input;
const addFoo: Worker = (input: string) => `${input}Foo`;
const config: Config = {};

export default function init(): void {
  config.worker = process.env.WORKER === 'foo' ? addFoo : echo;
}

export function getConfig(): Config {
  return { ...config };
}
