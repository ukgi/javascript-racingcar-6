import { ERROR_MESSAGE } from '../../src/constants/messages';
import {
  isValidateCarName,
  isValidateAttemps,
} from '../../src/utils/validator';

describe('Validator Test', () => {
  test.each(['', ' ', 'pobi,', 'pobi, ', 'pobi,javajigi'])(
    '자동차 이름이 형식에 맞지 않으면 에러를 던집니다.',
    (input) => {
      expect(() => {
        isValidateCarName(input);
      }).toThrow(ERROR_MESSAGE.carName);
    },
  );

  test('자동차 이름이 중복되면 에러를 던집니다.', () => {
    const cars = 'pobi,pobi,ukgi';
    expect(() => {
      isValidateCarName(cars);
    }).toThrow(ERROR_MESSAGE.duplicatedCarName);
  });

  test.each(['', ' ', '1f'])(
    '시도횟수가 숫자가 아니면 에러를 던집니다.',
    (input) => {
      expect(() => {
        isValidateAttemps(input);
      }).toThrow(ERROR_MESSAGE.attemps);
    },
  );

  test('시도횟수의 타입은 Number입니다.', () => {
    expect(isValidateAttemps('1')).toBeTruthy();
  });
});