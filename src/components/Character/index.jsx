import React, { useState, useEffect } from "react";

const Character = ({ count }) => {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    const fetchCharacter = (count) =>
      fetch(`https://rickandmortyapi.com/api/character/${count}`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.image);
        });
    fetchCharacter(count);
  }, [count]);

  return (
    <div>
      <img src={character} alt="Personagem de Rick and Morty" />
    </div>
  );
};

export default Character;
