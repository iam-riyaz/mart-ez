import { Button, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
          <button className="pb-5 text-md"    >
            About
          </button>
          </div>

          <div>
          <button className="pb-5 text-md "  >
            Blog
          </button>
          </div>
          <div>
          <button className="pb-5  text-md"  >
            Press
          </button>
          </div>
          <div>
          <button className="pb-5  text-md"  >
            Carees
          </button>
          </div>
          <div>
          <button className="pb-5 text-md"  >
            Partners
          </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
          <button className="pb-5 text-md" >
            Marketing
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" >
            Analytics
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" >
            Commerce
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" >
            Insights
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" >
            Support
          </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
          <button className="pb-5 text-md" >
            Guldes
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" >
            API Status
          </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
          <button className="pb-5 text-md" variant="h6" gutterBottom>
            Claim
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" variant="h6" gutterBottom>
            Privacy
          </button>
          </div>
          <div>
          <button className="pb-5 text-md" variant="h6" gutterBottom>
            Terms
          </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
