import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { StyledTableCell, StyledTableRow } from './styles'
import { IData } from '../../types'

interface Props {
  rows: IData[]
}

const HomeTableView = ({ rows }: Props) => {
  return (
    <Grid container paddingX={2}>
      <Grid item xs={12}>
        Hola
      </Grid>
      <Grid item xs={24} justifyContent="center" sx={{ display: "flex" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Razón Social</StyledTableCell>
                <StyledTableCell>Dirección</StyledTableCell>
                <StyledTableCell>Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: IData) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.socialReason}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.address}
                  </StyledTableCell>
                  <StyledTableCell>
                    Acciones
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default HomeTableView
