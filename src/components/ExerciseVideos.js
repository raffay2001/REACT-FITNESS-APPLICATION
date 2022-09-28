import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVidoes, name }) => {
  console.log(exerciseVidoes);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
        textAlign="start"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Vidoes
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "10px", xs: "0px" },
          pl: { lg: "18px", xs: "1px" },
        }}
      >
        {exerciseVidoes?.slice(0, 3).map((item, index) => {
          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{display: "block", marginBottom: "2.5rem"}}
            >
              <img
                style={{ borderTopLeftRadius: "20px", width: "22rem" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box pr={2}>
                <Typography variant="h6" color="#000">
                  {item.video.title}.
                </Typography>
                <Typography variant="body" color="#000" fontWeight="bold">
                  {item.video.channelName}.
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
