export type CoworkerCollection = Record<string, number>;

const shouldIQuit = (coworkerCollection: CoworkerCollection, boss: string) => {
  const names = Object.keys(coworkerCollection);

  let score = 0;
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    score +=
      name === boss ? coworkerCollection[name] * 2 : coworkerCollection[name];
  }

  return score / names.length > 5 ? "You're gucci" : 'GTFO!';
};

export default shouldIQuit;
