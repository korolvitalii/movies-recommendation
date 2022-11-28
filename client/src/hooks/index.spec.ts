import { act, renderHook } from '@testing-library/react-hooks'
import { movies } from '../stories/stub'
import useMovies, { MAX_SELECTED_MOVIES } from './useMovies'

describe('useMovies hook', () => {
  it('should select movie', () => {
    const { result } = renderHook(() => useMovies())
    const movie = movies[0]
    act(() => {
      result.current.selectMovie(movie)
    })

    expect(result.current.selectedMovies[0].id).toBe(movie.id)
  })

  it('should remove movie', () => {
    const { result } = renderHook(() => useMovies())
    const movie = movies[0]

    act(() => {
      result.current.selectMovie(movie)
    })

    expect(result.current.selectedMovies.length).toBe(1)

    act(() => {
      result.current.removeMovie(movie)
    })

    expect(result.current.selectedMovies.length).toBe(0)
  })

  it('should select movie only once', () => {
    const { result } = renderHook(() => useMovies())
    const movie = movies[0]
    act(() => {
      result.current.selectMovie(movie)
    })

    act(() => {
      result.current.selectMovie(movie)
    })

    expect(result.current.selectedMovies.length).toBe(1)
    expect(result.current.selectedMovies[0].id).toBe(movie.id)
  })

  it('should add no more movies than it is allowed', () => {
    const { result } = renderHook(() => useMovies())
    const movie = movies[0]
    for (let i = 0; i < MAX_SELECTED_MOVIES; i += 1) {
      act(() => {
        result.current.selectMovie({ ...movie, id: String(i) })
      })
    }

    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)

    act(() => {
      result.current.selectMovie({ ...movie, id: '21' })
    })

    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES)
  })
})

export {}
