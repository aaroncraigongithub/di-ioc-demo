/**
 * Reduce words to their stems, ie "skier" => "ski"
 */

import { Processor } from '../interfaces';

const stemmer: Processor = (input: string[]) => {
  const stems = input.reduce((acc: string[], token: string) => {
    if (/^ski/.test(token)) {
      acc.push('ski');
    } else {
      acc.push(token);
    }

    return acc;
  }, []);

  return stems;
};

export default stemmer;
