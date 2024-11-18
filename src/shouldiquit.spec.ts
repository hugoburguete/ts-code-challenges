import shouldIQuit from './shouldiquit';

describe('', () => {
  test("With inputs {'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0} and laura, return GTFO!", () => {
    const output = shouldIQuit(
      {
        tim: 0,
        jim: 2,
        randy: 0,
        sandy: 7,
        andy: 0,
        katie: 5,
        laura: 1,
        saajid: 2,
        alex: 3,
        john: 2,
        mr: 0,
      },
      'laura'
    );
    expect(output).toBe('GTFO!');
  });

  test("With inputs {'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8} and katie, return You're gucci.", () => {
    const output = shouldIQuit(
      {
        tim: 1,
        jim: 3,
        randy: 9,
        sandy: 6,
        andy: 7,
        katie: 6,
        laura: 9,
        saajid: 9,
        alex: 9,
        john: 9,
        mr: 8,
      },
      'katie'
    );
    expect(output).toBe("You're gucci");
  });

  test("With inputs {'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8} and john, return GTFO!", () => {
    const output = shouldIQuit(
      {
        tim: 2,
        jim: 4,
        randy: 0,
        sandy: 5,
        andy: 8,
        katie: 6,
        laura: 2,
        saajid: 2,
        alex: 3,
        john: 2,
        mr: 8,
      },
      'john'
    );
    expect(output).toBe('GTFO!');
  });
});
