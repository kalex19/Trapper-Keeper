import { fetchData } from './fetchData';

describe('fetchData', () => {

  let mockNote;
  let mockUrl;

  beforeEach(() => {
    mockUrl = 'www.jurassicpark.com';
    mockNote = {title: 'Isla Nublar', tasks: ['Clean Paths', 'Feed Dinos']};

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockNote)
      });
    });
  });

  it('should call fetch with the correct params', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined)
  });

  it('should return a parsed response if status is okay', async () => {
    let result = await fetchData(mockUrl);

    expect(result).toEqual(mockNote);
  });

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchData()).rejects.toEqual(Error());
  })


})