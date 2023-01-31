import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, { useState } from "react";
import Profile from "../assets/avatar.jpg";
import { Stack } from "@mui/system";

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          background: "#FAA136",
          "&:hover": {
            backgroundColor: "#E38D25",
          },
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <Avatar src={Profile} />
            <Typography fontWeight={500} variant="span">
              Leonel
            </Typography>
          </Box>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            placeholder="Write your message"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#FAA136",
              "&:hover": {
                backgroundColor: "#E38D25",
              },
            }}
          >
            Post
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Add;
