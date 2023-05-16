import { Box, Button, Grid, Typography } from '@mui/material'
import { GapsiLogo } from '../../assets'

interface Props {
  image?: string
  name: string
  onContinueClick: () => void
}

const MainView = ({ image = GapsiLogo, name, onContinueClick }: Props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={24} justifyContent="center" sx={{ display: "flex" }}>
          <Box
            sx={{ borderRadius: "50%", borderColor: "blue", padding: 2 }}
            border="2px solid blue"
          >
            <img src={image} width={75} height={30} />
          </Box>
        </Grid>
        <Grid
          item
          xs={24}
          justifyContent="center"
          sx={{ display: "flex" }}
          mt={1}
        >
          <Typography variant="body1">Bienvenido {name}</Typography>
        </Grid>
        <Grid
          item
          xs={24}
          justifyContent="center"
          sx={{ display: "flex" }}
          mt={1}
        >
          <Button variant="contained" onClick={() => onContinueClick()}>
            Continuar
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default MainView
