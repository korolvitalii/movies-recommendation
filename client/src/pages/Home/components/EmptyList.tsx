import { CardMedia, Paper, styled, Typography } from '@mui/material'

const StyledCard = styled(Paper)(() => ({
  minHeight: '900px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

const EmptyList = () => {
  return (
    <StyledCard>
      <CardMedia
        sx={{ height: '200px', width: '90%' }}
        component="img"
        image="https://img.freepik.com/free-photo/clapperboard-popcorn_23-2147775681.jpg?w=1380&t=st=1669540547~exp=1669541147~hmac=a90529bac8d6596813a371bf9f5ee0374a7a51490dcd7b7f7110c410ebb183e0"></CardMedia>
      <Typography variant="h5" gutterBottom>
        Selected movies list is empty.
      </Typography>
    </StyledCard>
  )
}

export default EmptyList
