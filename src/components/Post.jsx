import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import Post1 from "../assets/landscape.jpg";
import styled from "@emotion/styled";

function Post() {
  const Expanded = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FAA136" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="December 14, 2022"
      />
      <CardMedia component="img" height="200px" image={Post1} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          No man is an island, Entire of itself, Every man is a piece of the
          continent, A part of the main.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            If a clod be washed away by the sea, Europe is the less. As well as
            if a promontory were.
          </Typography>
          <Typography paragraph>
            As well as if a manor of thy friend’s Or of thine own were: Any
            man’s death diminishes me, Because I am involved in mankind,
          </Typography>
          <Typography paragraph>
            And therefore never send to know for whom the bell tolls; It tolls
            for thee.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
