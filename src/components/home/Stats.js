import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stats() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Item>123</Item>
        </Grid>
        <Grid xs={3}>
          <Item>123</Item>
        </Grid>
        <Grid xs={3}>
          <Item>123</Item>
        </Grid>
        <Grid xs={3}>
          <Item>123</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
