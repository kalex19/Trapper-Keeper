import { isLoading } from '../loadingReducer';

describe('isLoading', () => {

  it('should return the initial state', ()=> {
    const expected = false;

    const result = isLoading(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return a truthy value in case of loading', () => {
    const expected = false;
    const result = isLoading(undefined, false);

    expect(result).toEqual(expected);
  });
});