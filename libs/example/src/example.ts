export class Example {
  static #instance: Example | null = null;

  #foo: string;

  get foo(): string {
    return this.#foo;
  }

  private constructor() {
    this.#foo = 'bar';
  }

  static getInstance(): Example {
    return (Example.#instance ||= new Example());
  }
}
