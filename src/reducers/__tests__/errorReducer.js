import { hasErrored } from '../errorReducer';
import * as actions from '../../actions';

describe('hasErrored', () => {

  it('should return a default state', () => {
    const expected = '';
    const result = hasErrored(undefined, '');

    expect(result).toEqual(expected)
  });

  it('should return an error message', () => {
    const expected = 'Error!';
    const result = hasErrored(undefined, actions.hasErrored);

    expect(result).toEqual(expected);
  });

});