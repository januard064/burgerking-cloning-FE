import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CarouselDataImages } from "./carousel-home-data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselHome = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = CarouselDataImages.length;

  const handleNext = () => {
    if (activeStep !== CarouselDataImages.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep(0);
    }
  };

  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    } else {
      setActiveStep(CarouselDataImages.length - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100vw", flexGrow: 1, position: "relative" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {CarouselDataImages.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { xs: 200, md: 490 },
                  display: "block",
                  width: "100vw",
                  overflow: "hidden",
                }}
                src={step.src}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <MobileStepper
          steps={maxSteps}
          position="center"
          activeStep={activeStep}
          sx={{
            backgroundColor: "transparent",
            color: "green",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "40%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(225, 225, 225, .5);",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 8,
          }}
          onClick={handleBack}
        >
          <ArrowBackIosIcon sx={{ color: "#FAAF18", fontSize: 24, ml: 1 }} />
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(225, 225, 225, .5);",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 8,
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon sx={{ color: "#FAAF18", fontSize: 24, mr: 1 }} />
        </Box>
      </Box>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
};

export default CarouselHome;
