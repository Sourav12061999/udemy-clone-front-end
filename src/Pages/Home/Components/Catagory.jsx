import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import CourseCard from "../../../Components/Course-Card/CourseCard";
import Skeletoncard from "../../../Components/Course-Card/Skeletoncard";
import url from "../../../env";
import Grid from "@mui/material/Grid";

function Catagory({ heading, urlParam }) {
  const [Data, setData] = useState(null);
  useEffect(() => {
    fetch(`${url}/CourseCard/getCards/catagory=${urlParam}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography gutterBottom variant="h5" sx={{ fontWeight: 600, ml: 1 }}>
        {heading}
      </Typography>
      <Grid container sx={{ width: "100%" }}>
        {Data ? (
          <>
            {Data.map((card) => {
              return (
                <Grid spacing={1} sx={{ ml: 1 }} item xs={2.2} key={card._id}>
                  <CourseCard data={card} />
                </Grid>
              );
            })}
          </>
        ) : (
          <>
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
            <Skeletoncard />
          </>
        )}
      </Grid>
    </Box>
  );
}

export default Catagory;
