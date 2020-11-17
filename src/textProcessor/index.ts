/**
 * Text processing pipeline
 *
 * This file contains the text pipeline runner, which simply accepts the
 * text to be processed, a Tokenizer and then an array of Processors which
 * will be run serially, with each Processor receiving as input the output
 * from the preceding Processor.
 */

import { Processor, Tokenizer } from './interfaces';

export default function tokenize(
  input: string,
  tokenize: Tokenizer,
  pipeline: Processor[],
): string[] {
  let tokens = tokenize(input);

  pipeline.forEach((processor) => {
    tokens = processor(tokens);
  });

  return tokens;
}
