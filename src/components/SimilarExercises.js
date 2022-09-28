// import React from "react";
// import { Box, Stack, Typography } from "@mui/material";
// import HorizontalScrollBar from "./HorizontalScrollBar";
// import Loader from "./Loader";

// const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
//   return (
//     <Box sx={{ marginTop: { lg: "100px", xs: "0px" } }}>
//       <Typography variant="h3" mb={5}>
//         Exercises that target the same muscle group.
//       </Typography>
//       <Stack direction="row" sx={{ p: "2", position: "relative" }}>
//         {targetMuscleExercises.length ? (
//           <HorizontalScrollBar data={targetMuscleExercises.slice(0,3)} />
//         ) : (
//           <Loader />
//         )}
//       </Stack>

//       <Typography variant="h3" mb={5}>
//         Exercises that target the same equipment.
//       </Typography>
//       <Stack direction="row" sx={{ p: "2", position: "relative" }}>
//         {equipmentExercises.length ? (
//           <HorizontalScrollBar data={equipmentExercises.slice(0, 3)} />
//         ) : (
//           <Loader />
//         )}
//       </Stack>
//     </Box>
//   );
// };

// export default SimilarExercises;

import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px", mt: {xs: "4rem"} }}
      fontWeight={700}
      color="#000"
      mb="33px"
      textAlign="center"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      Exercises.
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollBar data={targetMuscleExercises.slice(0,4)} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
      textAlign="center"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      Exercises.
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollBar data={equipmentExercises.slice(0,4)} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
