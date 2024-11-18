import pathwalk, { type Coordinate } from './pathwalk';

describe('pathwalk', () => {
  test("With input ['n','s','n','s','n','s','n','s','n','s'], return true", () => {
    const input: Coordinate[] = [
      'n',
      's',
      'n',
      's',
      'n',
      's',
      'n',
      's',
      'n',
      's',
    ];
    const output = pathwalk(input);
    return expect(output).toBeTruthy();
  });

  test("With input ['w','e','w','e','w','e','w','e','w','e','w','e'], return false", () => {
    const input: Coordinate[] = [
      'w',
      'e',
      'w',
      'e',
      'w',
      'e',
      'w',
      'e',
      'w',
      'e',
      'w',
      'e',
    ];
    const output = pathwalk(input);
    return expect(output).toBeFalsy();
  });

  test("With input ['n', 's', 'e', 'w', 's', 'e', 'n', 'w', 'w', 'e'], return true", () => {
    const input: Coordinate[] = [
      'n',
      's',
      'e',
      'w',
      's',
      'e',
      'n',
      'w',
      'w',
      'e',
    ];
    const output = pathwalk(input);
    return expect(output).toBeTruthy();
  });

  test("With input ['w'], return false", () => {
    const input: Coordinate[] = ['w'];
    const output = pathwalk(input);
    return expect(output).toBeFalsy();
  });

  test("With input ['n','n','n','s','n','s','n','s','n','s'], return false", () => {
    const input: Coordinate[] = [
      'n',
      'n',
      'n',
      's',
      'n',
      's',
      'n',
      's',
      'n',
      's',
    ];
    const output = pathwalk(input);
    return expect(output).toBeFalsy();
  });
});
