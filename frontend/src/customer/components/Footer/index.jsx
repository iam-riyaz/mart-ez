import { Grid, Typography } from "@mui/material";

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
          <Typography className="pb-5" variant="h6" gutterBottom>
            About
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Blog
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Press
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Carees
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Partners
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Marketing
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Analytics
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Commerce
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Insights
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Support
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Guldes
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            API Status
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Claim
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Privacy
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Terms
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
