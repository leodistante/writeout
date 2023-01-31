import React from "react";
import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import Contact1 from "../assets/contact1.png";
import Contact2 from "../assets/contact2.jpg";
import Contact4 from "../assets/contact4.jpg";
import Contact5 from "../assets/contact5.jpg";
import Contact6 from "../assets/contact6.jpg";
import Contact7 from "../assets/contact7.jpg";
import Contact8 from "../assets/contact8.jpg";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300} >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{marginBottom: "10px"}}>
          <Avatar alt="Remy Sharp" src={Contact1} />
          <Avatar alt="Travis Howard" src={Contact2} />
          <Avatar alt="Cindy Baker" src={Contact4} />
          <Avatar alt="Agnes Walker" src={Contact5} />
          <Avatar alt="Trevor Henderson" src={Contact6} />
          <Avatar alt="Lara James" src={Contact7} />
          <Avatar alt="Sam Jones" src={Contact8} />
          <Avatar alt="Sam Jones" src={Contact8} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={Contact1} />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={Contact4} />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Jennifer Gomez
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={Contact7} />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
