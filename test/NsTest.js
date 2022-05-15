import { default as expect } from 'expect.js';
import ns from '../src/index.js';

describe('ns', () => {

  it(`namespace should exists`, async () => {
    expect(typeof ns).to.eql("object");
  })
  
})
