import { Tokenizer } from '../interfaces';

/**
 * Whitespace tokenizer
 *
 * Simply splits the incoming string on spaces.
 */

const whitespace: Tokenizer = (input: string) => input.split(/\s+/);

export default whitespace;
