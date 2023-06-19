export function calculateWinCondition() {
  const difficulty = localStorage.getItem("difficulty");

  switch (difficulty) {
    case "easy":
      return 80;

    case "medium":
      return 200;

    case "hard":
      return 400;
    default:
      return 80;
  }
}
