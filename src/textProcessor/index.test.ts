import tokenize from '.';
import { Processor } from './interfaces';
import deduper from './processors/deduper';
import lowercase from './processors/lowercase';
import stemmer from './processors/stemmer';
import stopwords from './processors/stopwords';
import whitespace from './tokenizers/whitespace';

describe('tokenize', () => {
  const input = 'The skier skis down the ski slope.';
  const pipeline: Processor[] = [lowercase, stopwords, stemmer, deduper];

  let tokens: string[];

  beforeEach(() => {
    tokens = tokenize(input, whitespace, pipeline);
  });

  it('tokenizes the string', () => {
    expect(tokens).toEqual(['ski', 'down', 'slope']);
  });
});
