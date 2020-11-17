import stopwords from './stopwords';

describe('stopwords', () => {
  let tokens: string[];

  describe('given the string contains a stopword', () => {
    const input = ['the', 'big', 'dog'];

    beforeEach(() => {
      tokens = stopwords(input);
    });

    it('removes the stopword', () => {
      expect(tokens).toEqual(['big', 'dog']);
    });
  });

  describe('given the string contains no stopwords', () => {
    const input = ['really', 'big', 'dog'];

    beforeEach(() => {
      tokens = stopwords(input);
    });

    it('removes the no words', () => {
      expect(tokens).toEqual(input);
    });
  });
});
