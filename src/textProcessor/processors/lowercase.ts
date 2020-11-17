/**
 * Transform each token to lowercase
 */

import { Processor } from '../interfaces';

const lowercase: Processor = (input: string[]) => {
  const tokens = input.reduce((acc: string[], token: string) => {
    acc.push(token.toLowerCase());

    return acc;
  }, []);

  return tokens;
};

export default lowercase;
