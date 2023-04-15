export type GameType = {
  name: string;
  type: string;
  pin: string;
};

export const mockGamesData = {
  games: [
    {
      name: "The Last Stand",
      type: "Color",
      pin: "0000",
    },
    {
      name: "Escape from Alcatraz",
      type: "Text / Number",
      pin: "0000",
    },
    {
      name: "The Dirty Dozen",
      type: "Custom",
      pin: "0000",
    },
  ],
  get getGames() {
    return this.games;
  },
  set addGame(newGame: GameType) {
    this.games.push(newGame);
  },
};
