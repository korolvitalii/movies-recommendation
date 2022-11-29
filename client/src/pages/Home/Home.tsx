import { useQuery } from '@apollo/client'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Box, Grid, IconButton, Pagination, Paper, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { Field, Form } from 'react-final-form'
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

  const { selectedMovies, selectMovie, removeMovie } = useMovies()

  const paginationHandler = (_: any, page: number) => {
    setPage(page)
  }

  const onSubmit = (e: { [key: string]: string }) => {
    const ids = selectedMovies.map(({ id }) => id)
    const link = `${window.location.host}/recommend?title=${e.listName}&ids=${ids.join()}`
    console.log('🚀 ~ file: Home.tsx ~ line 40 ~ onSubmit ~ link', link)
  }

  const required = (value: any) => (value ? undefined : 'Required')

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
            <Form
              onSubmit={onSubmit}
              // validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                    <Field name="listName" validate={required}>
                      {({ input, meta }) => (
                        <>
                          <TextField fullWidth placeholder="Put the list name" {...input} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                          <IconButton type="submit" sx={{ p: '10px' }}>
                            <CheckCircleOutlineIcon />
                          </IconButton>
                        </>
                      )}
                    </Field>
                  </Paper>
                </form>
              )}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Home
