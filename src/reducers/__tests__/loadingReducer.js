import { isLoading } from '../loadingReducer';
import * as actions from '../../actions';

describe('isLoading', () => {

  it('should return the initial state', ()=> {
    const expected = false;

    const result = isLoading(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return a truthy value in case of loading', () => {
    const expected = false;
    const result = isLoading(undefined, true);

    expect(result).toEqual(expected);
  });
});