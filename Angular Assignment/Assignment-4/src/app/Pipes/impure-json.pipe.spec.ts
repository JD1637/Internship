import { ImpureJSONPipe } from './impure-json.pipe';

describe('ImpureJSONPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureJSONPipe();
    expect(pipe).toBeTruthy();
  });
});
