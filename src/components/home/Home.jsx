import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { DataGrid, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector, jaJP } from '@mui/x-data-grid';

export default function CheckboxesGroup() {
  return (
    <Grid item xs={12}>
      <Paper>
        <Typography> home </Typography>
        <Typography> home </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Paper>
    </Grid>

  );
}
