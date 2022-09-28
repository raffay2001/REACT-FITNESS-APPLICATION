import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: isBodyParts ? "start" : "center", sm: isBodyParts ? "start" : "center" },
        alignItems: "center",
        gap: "0px",
      }}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="10px 40px"
          sx={{
            border: isBodyParts ? "1px solid #f17b7b" : "",
            borderTop: bodyPart === item ? "4px solid #FF2625" : "",
            padding: "20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar;
