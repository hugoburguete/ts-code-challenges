import uppercase from './uppercase';

describe('uppercase', () => {
  test('With input This is a test, return ThIs Is A TeSt', () => {
    const input = 'This is a test';
    const output = uppercase(input);

    expect(output).toBe('ThIs Is A TeSt');
  });

  test('With input unique, return UnIqUe', () => {
    const input = 'unique';
    const output = uppercase(input);

    expect(output).toBe('UnIqUe');
  });

  test('With input UPPER CASE, return UpPeR CaSe', () => {
    const input = 'UPPER CASE';
    const output = uppercase(input);

    expect(output).toBe('UpPeR CaSe');
  });

  test('With input lower case, return LoWeR CaSe', () => {
    const input = 'lower case';
    const output = uppercase(input);

    expect(output).toBe('LoWeR CaSe');
  });

  test('With an empty string input, return an empty string', () => {
    const input = '';
    const output = uppercase(input);

    expect(output).toBe('');
  });

  test('WIth input bark BARK woof WOOF return BaRk BaRk WoOf WoOf', () => {
    const input = 'bark BARK woof WOOF';
    const output = uppercase(input);

    expect(output).toBe('BaRk BaRk WoOf WoOf');
  });
});
