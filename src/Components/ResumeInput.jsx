import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const steps = ['Basic Informations', 'Contact Details', 'Education Details','Review & Submit'];

function ResumeInput() {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormCount = (stepCount) => {

    switch (stepCount) {
      case 0: return(
        <div>
          <h3>Personal Details</h3>
        </div>
      )
        break;
        case 1: return(
        <div>
          <h3>Contact Details</h3>
        </div>
      )
        break;
        case 2: return(
        <div>
          <h3>Educational Details</h3>
        </div>
      )
        break;
        case 3: return(
        <div>
          <p>Our AI will generate Skills & Summary according to your job role. Click the <b>Generate AI Skills & Summary</b> button to Proceed</p>
        </div>
      )
        break;
    
      default:
        break;
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          
          <Box>
          {/* render form according to the active step */}

          {
            renderFormCount(activeStep)
          }

          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            
              {activeStep === steps.length - 1 
              ?
               <Button>GENERATE AI SKILLS & SUMMARY</Button> 
               : <Button onClick={handleNext}>NEXT</Button>}
            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ResumeInput
