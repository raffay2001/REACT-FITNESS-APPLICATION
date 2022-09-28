import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // console.log("Exercises are: " + JSON.stringify(exercises));
  const currentExercises =
    exercises.length > 0
      ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
      : [];

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
      // if (bodyPart === "all") {
      //   exercisesData = await fetchData(
      //     "https://exercisedb.p.rapidapi.com/exercises",
      //     exerciseOptions
      //   );
      //   setExercises(exercisesData);
      // } else {
      //   exercisesData = await fetchData(
      //     `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
      //   );
      //   setExercises(exercisesData);
      // }
    };
    fetchExercisesData();
  }, []);

  return (
    <Box id="exercises" sx={{ marginTop: { lg: "10px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="60px" fontWeight={600} sx={{ ml: "3rem" }}>
        Showing Results.
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.length > 0 ? currentExercises.map((exercise, index) => (
          <ExerciseCard
            key={exercise.name.toString() + index.toString()}
            exercise={exercise}
          />
        )) : <Loader />}
      </Stack>
      <Stack marginTop="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={(e, value) => paginate(e, value)}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
