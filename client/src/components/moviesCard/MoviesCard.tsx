import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Box, IconButton, styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IMovie } from '../../interfaces'
import { CardMenu } from '../cardMenu'

const options = ['Select']

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}))

const StyledIconButton = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  cursor: 'pointer',
}))

const StyledCard = styled(Card)(() => ({
  maxWidth: 250,
  maxHeight: 500,
  position: 'relative',
  '.MuiBox-root': {
    display: 'none',
  },
  '&:hover': {
    '.MuiBox-root': {
      display: 'flex',
    },
  },
}))

interface Props {
  movie: IMovie
  onCardSelect: (movie: IMovie) => void
}

const MoviesCard: React.FC<Props> = ({ movie, onCardSelect }) => {
  return (
    <StyledCard>
      <Box
        sx={{
          maxWidth: 250,
          maxHeight: 500,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <StyledIconButton>
          <IconButton>
            <ControlPointIcon
              sx={{ fontSize: '75px', color: 'gray' }}
              onClick={() => onCardSelect(movie)}
            />
          </IconButton>
        </StyledIconButton>
      </Box>
      <CardMenu onCardSelect={() => onCardSelect(movie)} options={options} />
      <CardMedia component="img" height="100%" image={movie.posterPath} alt={movie.title} />
      <StyledCardContent>
        <Typography sx={{ height: 80 }} variant="h6">
          {movie.title}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  )
}

export default MoviesCard
