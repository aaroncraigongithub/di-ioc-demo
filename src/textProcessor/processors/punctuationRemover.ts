/**
 * Remove punctuation from tokens
 */

import { Processor } from '../interfaces';

const punctuationRemover: Processor = (input: string[]) => {
  const tokens = input.reduce((acc: string[], token: string) => {
    acc.push(token.replace('.', ''));

    return acc;
  }, []);

  return tokens;
};

export default punctuationRemover;
