import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Chip, Card, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

export default function DisplayCard({ source, charNames, gender, status, species, location }) {
  const theme = useTheme();
  const mq = useMediaQuery("(max-width:587px)");

  return (
    <Card
      sx={{
        width: "100%",
        display: `${mq ? "block" : "flex"}`,
        borderRadius: 3,
        background: theme.palette.grey[900],
      }}>
      <CardMedia
        component='img'
        sx={{ maxWidth: "100%", height: "auto" }}
        image={source}
        alt={`image-for-${source}`}
      />
      <CardContent sx={{ color: theme.palette.common.white, px: 2, minWidth: 240 }}>
        <Typography
          component='h4'
          variant='h4'>
          {charNames}{" "}
          {gender === "Male" ? (
            <MaleOutlinedIcon color='primary' />
          ) : (
            <FemaleOutlinedIcon color='secondary' />
          )}
        </Typography>
        <Box sx={{ display: "flex", py: 1, gap: 1 }}>
          <Typography
            component='h2'
            variant='body1'>
            Status:{" "}
          </Typography>
          <Chip
            size='small'
            label={status === "Alive" ? "Alive" : status === "Dead" ? "Dead" : "Unknown"}
            color={status === "Alive" ? "success" : status === "Dead" ? "error" : "warning"}
            variant='outlined'
          />
        </Box>
        <Typography
          component='h2'
          variant='body1'>
          Species: {species}
        </Typography>
        <Box sx={{ display: "flex", alignItem: "center", gap: 1, pt: 1 }}>
          <ShareLocationIcon />
          <Typography
            color='primary'
            component='h5'
            variant='body1'>
            {location.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
