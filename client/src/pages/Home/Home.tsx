import { useQuery } from '@apollo/client'
import { Box, Grid, Pagination, Paper, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { MoviesCard, MoviesCardSelected } from '../../components'
import useMovies from '../../hooks/useMovies'
import { IMovie } from '../../interfaces'
import EmptyList from './components/EmptyList'
import { GET_MOVIES } from './queries'

const Home = () => {
  const [page, setPage] = useState(1)

  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: {
      pageNumber: page,
    },
  })
  console.log('🚀 ~ file: Home.tsx ~ line 18 ~ Home ~ data', data)
  const { selectedMovies, selectMovie, removeMovie } = useMovies()

  const paginationHandler = (_: any, page: number) => {
    setPage(page)
  }

  useEffect(() => {}, [selectedMovies])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Sorry, something went wrong... :(</h1>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid
                container
                spacing={2}
                sx={{ marginTop: 1, marginBottom: 1 }}
                direction="row"
                justifyContent="center"
                alignItems="flex-start">
                {data?.getMovies.results.map((movie: IMovie) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <MoviesCard movie={movie} onCardSelect={selectMovie} />
                  </Grid>
                ))}
              </Grid>
              <Stack flexDirection="row" justifyContent="center">
                <Pagination
                  count={data?.getMovies.totalPages}
                  variant="outlined"
                  shape="rounded"
                  onChange={paginationHandler}
                />
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              flexGrow: 1,
              maxHeight: '900px',
              maxWidth: '500px',
              overflowY: 'auto',
            }}>
            {selectedMovies && selectedMovies.length !== 0 ? (
              selectedMovies.map((selectedMovie) => (
                <MoviesCardSelected
                  key={selectedMovie.id}
                  movie={selectedMovie}
                  onDeleteClick={removeMovie}></MoviesCardSelected>
              ))
            ) : (
              <EmptyList />
            )}
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />{' '}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Home
