import { rotate } from '../rotation';
import { TETROMINOS } from '../tetromino';

describe('rotate', () => {
  it('should rotate a T tetromino correctly', () => {
    const matrix = TETROMINOS.T.shape;
    const rotatedMatrix = rotate(matrix);
    const expectedMatrix = [
      [0, 'T', 0],
      ['T', 'T', 0],
      [0, 'T', 0],
    ];
    expect(rotatedMatrix).toEqual(expectedMatrix);
  });

  it('should rotate an L tetromino correctly', () => {
    const matrix = TETROMINOS.L.shape;
    const rotatedMatrix = rotate(matrix);
    const expectedMatrix = [
      [0, 0, 'L'],
      ['L', 'L', 'L'],
      [0, 0, 0],
    ];
    // After one rotation
    const rotatedOnce = rotate(matrix);
    // After two rotations
    const rotatedTwice = rotate(rotatedOnce);
    // After three rotations
    const rotatedThrice = rotate(rotatedTwice);
    // After four rotations, it should be back to the original
    const rotatedFourTimes = rotate(rotatedThrice);

    expect(rotatedFourTimes).toEqual(matrix);
  });
});
