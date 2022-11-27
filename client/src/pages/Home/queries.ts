import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
  query Query($pageNumber: Int!) {
    getMovies(pageNumber: $pageNumber) {
      page
      totalPages
      totalResults
      results {
        adult
        backdrop_path
        genre_ids
        genres {
          id
          name
        }
        id
        original_language
        original_title
        overview
        popularity
        posterPath
        releaseDate
        title
        video
        vote_average
        vote_count
      }
    }
  }
`
