import movies from './answerList';
import games from './answerList';
import foods from './answerList';

export function rand() => {
  const wordIndex =
  Math.floor(Math.random() * words.length);

  return (
    movies,
    games,
    foods,
  )[wordIndex];
}
