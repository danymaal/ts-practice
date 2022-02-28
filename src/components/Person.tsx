import React, { FC } from 'react';

// We should export enum or interface to acces it elsewhere
export enum HairColor {
  Blonde = 'blonde cool',
  Brown = 'awesome brown',
  Pink = 'nice pink'
}

interface PersonProps {
  name: string;
  age: number;
  hairColor: HairColor;
}

const Person: FC<PersonProps> = ({name, age , hairColor}) => {
  return <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h5>{hairColor}</h5>
  </div>;
};

export default Person;
