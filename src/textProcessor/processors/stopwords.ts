/**
 * Remove stopwords from the token list
 */

import { Processor } from '../interfaces';

const stopwordList = ['the'];

const stopwords: Processor = (input: string[]) => {
  const tokens = input.reduce((acc: string[], token: string) => {
    if (stopwordList.indexOf(token) === -1) {
      acc.push(token);
    }

    return acc;
  }, []);

  return tokens;
};

export default stopwords;
