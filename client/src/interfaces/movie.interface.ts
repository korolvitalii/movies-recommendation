export interface IMovie {
  id: string
  title: string
  releaseDate: string
  posterPath: string
  adult: boolean | null
  overview: string | null
  genre_ids: number[] | null
  original_title: string | null
  original_language: string | null
  backdrop_path: string | null
  popularity: number | null
  vote_count: number | null
  video: boolean | null
  vote_average: number | null
  genres: IGenre[] | null
}

export interface IGenre {
  id: number
  name: string
}
