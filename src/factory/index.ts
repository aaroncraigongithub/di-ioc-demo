import { Processor } from '../textProcessor/interfaces';
import deduper from '../textProcessor/processors/deduper';
import lowercase from '../textProcessor/processors/lowercase';
import stemmer from '../textProcessor/processors/stemmer';
import stopwords from '../textProcessor/processors/stopwords';
export enum ProcessorType {
  DEDUPER,
  LOWERCASE,
  STEMMER,
  STOPWORDS,
}

export default function processorFactory(type: ProcessorType): Processor {
  const processors = {
    [ProcessorType.DEDUPER]: deduper,
    [ProcessorType.LOWERCASE]: lowercase,
    [ProcessorType.STEMMER]: stemmer,
    [ProcessorType.STOPWORDS]: stopwords,
  };

  return processors[type];
}

export function getAppropriateProcessor(input: string): Processor | undefined {
  if (/[A-Z]/.test(input)) {
    return lowercase;
  }

  if (/[A-Z]/.test(input)) {
    return lowercase;
  }

  if (/[A-Z]/.test(input)) {
    return lowercase;
  }

  if (/[A-Z]/.test(input)) {
    return lowercase;
  }

  return undefined;
}
