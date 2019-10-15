import { getMovies, getCharacterData } from './apiCalls'

describe('apiCalls', () => {

  const mockMovies = [{episode_id: 4},{episode_id: 2},{episode_id: 6}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    });
  })

  it('should call fetch with the correct url', () => {
    getMovies()
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')
  })

  it('should return an array of movies when getMovies is called', () => {
    expect(getMovies()).resolves.toEqual(mockMovies)
  })

  it('should return character data when getCharacterData is called', () => {
    const mockCharacters = [{name: 'Quinn'}, {name: 'Mike'}, {name: 'Yoda'}]
    
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharacters)
      })
    });
    
    expect(getCharacterData()).resolves.toEqual(mockCharacters)
  })

})