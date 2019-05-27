import { errors } from '../errorReducer';
import * as actions from '../../actions';

describe('errors', () => {

  it('should return a default state', () => {
    const expected = '';
    const result = errors(undefined, '');

    expect(result).toEqual(expected);
  });

  it('should return an error message', () => {
    const expected = 'Error!';
    const result = errors('', actions.setError('Error!'));
    
    expect(result).toEqual(expected);
  });

});