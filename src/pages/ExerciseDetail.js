import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

// const ExerciseDetail = () => {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const [exerciseVideos, setExerciseVideos] = useState([]);
//   const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
//   const [equipmentExercises, setEquipmentExercises] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       // grabbing the urls:
//       const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
// const youtubeSearchUrl =
//   "https://youtube-search-and-download.p.rapidapi.com";

//       const exerciseDetailData = await fetchData(
//         `${exerciseDbUrl}/exercises/exercise/${id}`,
//         exerciseOptions
//       );
//       setExerciseDetail(exerciseDetailData);

// const exerciseVideosData = await fetchData(
//   `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
//   youtubeOptions
// );
// setExerciseVideos(exerciseVideosData.contents);

//       const targetMuscleExercisesData = await fetchData(
//         `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
//         exerciseOptions
//       );
//       setTargetMuscleExercises(targetMuscleExercisesData);

//       const equipmentExercisesData = await fetchData(
//         `${exerciseDbUrl}/exercises/target/${exerciseDetailData.equipment}`,
//         exerciseOptions
//       );
//       setEquipmentExercises(equipmentExercisesData);
//     };

//     fetchExercisesData();
//   }, [id]);

//   return (
//     <Box>
//       <Detail exerciseDetail={exerciseDetail} />
// <ExerciseVideos
//   exerciseVidoes={exerciseVideos}
//   name={exerciseDetail.name}
// />
//       <SimilarExercises
//         targetMuscleExercises={targetMuscleExercises}
//         equipmentExercises={equipmentExercises}
//       />
//     </Box>
//   );
// };

// export default ExerciseDetail;

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
      <ExerciseVideos
        exerciseVidoes={exerciseVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
};

export default ExerciseDetail;
