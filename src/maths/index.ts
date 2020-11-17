import add from './operations/add';
import { Operation } from './operations/interfaces';

function doMath(a: number, b: number, op: Operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Input values must be numbers!');
  }

  return op(a, b);
}

const value = doMath(1, 2, add);

console.log({ value });
