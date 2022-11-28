import { useCallback, useState } from 'react'
import { IMovie } from '../interfaces'

export const MAX_SELECTED_MOVIES = 20

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([])
  const selectMovie = useCallback(
    (movie: IMovie) => {
      const selectedMoviesLength = selectedMovies.length
      const isNewMovie = selectedMovies.find(({ id }) => {
        return id === movie.id
      })
      if (!isNewMovie && selectedMoviesLength < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies])
      }
    },
    [selectedMovies],
  )

  const removeMovie = useCallback(
    (movie: IMovie) => {
      const filteredMovies = selectedMovies.filter(({ id }) => id !== movie.id)
      setSelectedMovies(filteredMovies)
    },

    [selectedMovies],
  )

  return { selectedMovies, selectMovie, removeMovie }
}

export default useMovies
