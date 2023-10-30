import WinnerModel from '../../src/model/WinnerModel';

describe('MakeWinner Test', () => {
  let winnerModel;
  beforeEach(() => {
    winnerModel = new WinnerModel();
  });

  test('우승자 생성기능 테스트', () => {
    const completedRaceCars = [
      {
        name: 'pobi',
        moveCounts: 2,
      },
      {
        name: 'ukgi',
        moveCounts: 1,
      },
    ];

    expect(winnerModel.makeWinner(completedRaceCars)).toEqual(
      expect.stringContaining('pobi'),
    );
  });

  test('중복 우승자 생성', () => {
    const completedRaceCars = [
      {
        name: 'pobi',
        moveCounts: 2,
      },
      {
        name: 'ukgi',
        moveCounts: 2,
      },
    ];
    const expectedWinner = ['pobi', 'ukgi'];

    expectedWinner.forEach((winner) => {
      expect(winnerModel.makeWinner(completedRaceCars)).toEqual(
        expect.stringContaining(winner),
      );
    });
  });
});
