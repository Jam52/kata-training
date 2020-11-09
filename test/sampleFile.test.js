import { SampleFile } from '../src/sampleFile'

test('just checking', () => {
    const sampleFile = new SampleFile();
    expect(sampleFile.sampleFunction()).toBe(1)
})