import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useParams } from "react-router-dom";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {

  const location = useLocation()

  const querySearch= new URLSearchParams(location.search)

  const step= querySearch.get("step")
  


  return (
    <div className="px-20 pt-5">
      <Box sx={{ width: "100%" }}>
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
                <AddressForm />
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
