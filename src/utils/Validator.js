export default class Validator {
  static isValidateCarName(answer) {
    const carName = answer.replace(/\s/g, '');
    if (
      !carName.split(',').every((name) => name.length > 0 && name.length <= 5)
    ) {
      throw new Error('[ERROR] 자동차 이름이 올바르지 않습니다.');
    }
    return true;
  }

  static isValidateAttemps(answer) {
    const attemps = answer.replace(/\s/g, '');
    if (Number.isNaN(Number(attemps)) || attemps.length === 0) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
    return true;
  }
}