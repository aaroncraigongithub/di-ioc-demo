export type ProcessorA = (input: string) => string | null;
export type ProcessorB = (input: string) => string;
export type ProcessorC = (input: string) => string;

export default class OrchestratorDemo {
  constructor(
    private processorA: ProcessorA,
    private processorB: ProcessorB,
    private processorC: ProcessorC,
  ) {}

  public processData(data: string): string {
    let output = this.processorA(data);

    if (output === null) {
      return '';
    }

    output = this.processorB(output);

    return this.processorC(output);
  }
}
