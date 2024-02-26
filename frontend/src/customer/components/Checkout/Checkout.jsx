import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router-dom";
import DeliveryAddressPage from "./DeliveryAddressPage";
import OrderSummary from "./OrderSummary";
import { MobileStepper, Paper } from "@mui/material";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {

  const location = useLocation()

  const querySearch= new URLSearchParams(location.search)

  const step= querySearch.get("step")
  


  return (
    <div className="md:px-20 px-5 pt-5">
      <Box sx={{ width: "100%" }}>
        
        <div className="hidden md:block">
        <Stepper activeStep={step-1}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  {...labelProps}
                  StepIconProps={{
                    style: {
                      color:
                        step === index
                          ? "black"
                          : index < step && "black",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        </div>
        <div className="md:hidden block">
             <h1 className="font-semibold text-xl text-center">{steps[step-1]}</h1>
        </div>
        {step === steps.length+1 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            
            <div>
              {step == 2 ? (
                <DeliveryAddressPage />
              ) : step == 3 ? (
                <OrderSummary />
              ) : null}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}


















