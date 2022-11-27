import { Box, Container, CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components'
import { Home, Recommend, Settings } from './pages'

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recommend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </>
  )
}

export default App
