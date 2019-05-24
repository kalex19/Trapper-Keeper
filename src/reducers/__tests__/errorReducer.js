import { setError } from '../errorReducer';
import * as actions from '../../actions';

describe('setError', () => {

  it('should return a default state', () => {
    const expected = '';
    const result = setError(undefined, '');

    expect(result).toEqual(expected)
  });

  it('should return an error message', () => {
    const expected = 'Error!';
    const result = setError(undefined, actions.setError);

    expect(result).toEqual(expected);
  });

});