import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Blackbox from "./Components/Blackbox";
import { useParams } from "react-router-dom";
import url from "../../env";
import { Main } from "./Styles/course";
import Listdescription from "./Components/Listdescrption";
import Description from "./Components/Description";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";
import Contentcard from "./Components/Contentcard";
function Course() {
  const [courseData, setcourseData] = useState({});
  const { course } = useParams();
  useEffect(() => {
    fetch(`${url}/Courses/courseId=${course}`)
      .then((res) => res.json())
      .then((res2) => {
        setcourseData(res2);
        console.log(res2);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
      {courseData.heading ? (
        <>
          <Blackbox
            heading={courseData.heading}
            subheading={courseData["small-heading"]}
            rating={courseData.rating}
            students={courseData.students}
            image={courseData.image}
          />
          <Box sx={Main.box}>
            <Box sx={Main.leftContent}>
              <Listdescription
                heading={"What you'll learn"}
                data={courseData.what_will_learn}
                Icon={CheckIcon}
              />
              <Description content={courseData.Description} />
              <Listdescription
                heading={"Who is this course for!"}
                data={courseData.who_is_for}
                Icon={ArrowForwardIosIcon}
              />
            </Box>
            <Box>
              <Contentcard
                price={courseData.price}
                data={courseData.course_includes}
              />
            </Box>
          </Box>
        </>
      ) : null}
    </Box>
  );
}

export default Course;
