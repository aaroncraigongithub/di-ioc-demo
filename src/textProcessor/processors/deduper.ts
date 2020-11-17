/**
 * Remove duplicate tokens from the input array
 */

import { Processor } from '../interfaces';

const deduper: Processor = (input: string[]) => {
  const uniques = input.reduce((acc: string[], token: string) => {
    if (acc.indexOf(token) === -1) {
      acc.push(token);
    }

    return acc;
  }, []);

  return uniques;
};
export default deduper;
