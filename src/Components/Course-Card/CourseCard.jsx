import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Rating } from "@mui/material";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import useUpdatecart from "../../Hooks/useUpdatecart";
import Snackbarcomp from "../Snackbar/Snackbarcomp";
export default function CourseCard({ data }) {
  const { snackbarState, openSnackbar, setOpenSnackbar, update_cart } =
    useUpdatecart();
  return (
    <>
      <Card sx={{ width: "100%", mb: 1 }}>
        <Link
          to={`/courses/${data.course_id}`}
          onClick={() => scroll.scrollToTop()}
        >
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="green iguana"
          />
        </Link>
        <CardContent>
          <Link
            to={`/courses/${data.course_id}`}
            onClick={() => scroll.scrollToTop()}
          >
            <Box
              overflow="hidden"
              whiteSpace="pre-line"
              textOverflow="ellipsis"
              height={40}
              sx={{
                fontSize: "15px",
                fontWeight: 600,
                ":hover": {
                  cursor: "pointer",
                  color: "#e040fb",
                  textDecoration: "underline",
                },
              }}
            >
              {data.heading}
            </Box>
          </Link>
          <Typography
            noWrap
            sx={{ fontSize: "12px", my: 0.5 }}
            variant="body2"
            color="text.secondary"
          >
            {data.author}
          </Typography>
          <Rating
            name="read-only"
            value={data.rating}
            precision={0.1}
            readOnly
          />
          <Typography sx={{ fontWeight: 600 }}>₹{data.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            endIcon={<BsFillCartPlusFill />}
            onClick={() => {
              update_cart(data._id);
            }}
          ></Button>
        </CardActions>
      </Card>
      <>
        <Snackbarcomp
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          note={snackbarState.note}
          severity={snackbarState.severity}
        />
      </>
    </>
  );
}
