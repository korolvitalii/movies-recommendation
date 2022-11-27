import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IMovie } from '../../interfaces'
import { CardMenu } from '../cardMenu'

interface Props {
  movie: IMovie
  onDeleteClick: (movie: IMovie) => void
}

const options = ['Remove']

const MoviesCardSelected: React.FC<Props> = ({ movie, onDeleteClick }) => {
  if (!movie) {
    return null
  }
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '70',
        position: 'relative',
        minHeight: '300px',
        marginTop: 4,
        marginLeft: 1,
        marginRight: 1,
      }}>
      <CardMenu onCardSelect={() => onDeleteClick(movie)} options={options} />
      <CardMedia component="img" sx={{ width: 151 }} image={movie.posterPath} alt={movie.title} />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h6">
          {movie.title}
        </Typography>
        <Typography component="div" variant="h6">
          Release date: {movie.releaseDate}
        </Typography>
        <Typography component="div" variant="h6">
          Popularity: {movie.popularity}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MoviesCardSelected
