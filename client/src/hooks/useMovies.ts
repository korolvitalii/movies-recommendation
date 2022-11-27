import { useCallback, useState } from 'react'
import { IMovie } from '../interfaces'

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([])
  const selectMovie = useCallback(
    (movie: IMovie) => {
      const isNewMovie = selectedMovies.find(({ id }) => {
        return id === movie.id
      })
      if (!isNewMovie) {
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
