import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { cyan } from "@mui/material/colors";

// import healthInsuranceImg from "./healthInsurance.jpg";
import family1 from "./family-1.jpg";
// import { ReactComponent as EcvLogo } from './efc-logo.svg';

import "./lifeInsurance101.scss";

const LifeInsurance101 = () => {
  return (
    <Box className="life-insurance-101">
      <Paper
        className="hero-image"
        square
        sx={{
          position: "relative",
          backgroundColor: cyan[900],
          color: cyan[50],
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1 }}></Box>
            <Stack
              maxWidth={900}
              alignItems={"center"}
              justifyContent={"flex-start"}
              sx={{ flex: 3 }}
            >
              <Typography variant="h2" component="h2" textAlign={"center"}>
                Life Insurance
              </Typography>
              <Typography variant="h5" component="p" textAlign={"center"}>
                Preserve Your Legacy: Defend the Life You've Worked Hard For
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                textAlign={"center"}
                sx={{
                  marginTop: 6,
                }}
              >
                Life insurance is more than just a policy; it's a promise to
                safeguard the ones you cherish most.
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                textAlign={"center"}
              >
                Let's work together to build a safety net for your family's
                future. Let's free your piece of mind and protect what matters
                the most to you.
              </Typography>
              <Button
                variant="contained"
                to="/schedule"
                sx={{
                  width: "fit-content",
                  background: cyan[500],
                  marginTop: 4,
                }}
                size="large"
                component={Link}
              >
                Connect with us
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
      <Paper>
        <Card
          sx={{
            margin: 2,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardContent>
              <Typography
                variant="h4"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                What is Life Insurance?
              </Typography>
              <Box
                sx={{
                  height: "70vh",
                  position: "relative",
                  backgroundColor: "grey.800",
                  color: "#fff",
                  backgroundImage: `url(${family1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <Typography
                variant="subtitle1"
                component="p"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                Life insurance is a safeguarding promise that offers financial
                protection to your loved ones in the event of your passing. It
                provides a payout – known as a death benefit – to your chosen
                beneficiaries, helping them navigate financial challenges during
                a difficult time.
              </Typography>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            marginLeft: 2,
            marginRight: 2,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
            textAlign={"center"}
            padding={1}
            color={cyan[900]}
          >
            We are a team of experts who are compromised to help you to
            understand the complexities of life insurance and empower you to
            make informed decisions about your financial needs.
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            padding={1}
            color={cyan[900]}
          >
            Protect your Loved ones
          </Typography>
          <CardActions
            sx={{ display: "flex", justifyContent: "center", margin: 4 }}
          >
            <Button
              component={Link}
              size="large"
              sx={{ width: "fit-content", background: cyan[900] }}
              to="/schedule"
              variant="contained"
            >
              Let's have a conversation
            </Button>
          </CardActions>
        </Card>
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          padding={1}
          color={cyan[900]}
          sx={{
            margin: 4,
          }}
        >
          Types of Life Insurance
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          textAlign={"center"}
          padding={1}
          color={cyan[900]}
        >
          We understand that each individual's financial situation is distinct
          and deserves personalized attention.
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Card
            sx={{
              margin: 2,
              padding: 2,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                variant="h4"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                Permanent Life Insurance
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                Permanent life insurance offers both lifelong protection(1) for
                your loved ones and the potential for cash value growth. It is a
                versatile and valuable financial tool that can play a
                significant role in securing your family's financial future and
                achieving your long-term financial goals.(2)
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              margin: 2,
              padding: 2,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography
                variant="h4"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                Term Life Insurance
              </Typography>
              <Typography
                variant="body1"
                component="p"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
              >
                It is a straightforward and affordable form of life insurance
                that provides coverage for a specified period, known as the
                "term." If you pass away during the term of the policy, the
                policy pays out a death benefit to the designated beneficiaries.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          padding={1}
          color={cyan[900]}
          sx={{
            margin: 4,
          }}
        >
          Life Insurance Strategies
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          padding={1}
          color={cyan[900]}
        >
          Secure What Matters Most: Flexible Insurance Solutions for Your Needs
        </Typography>

        <Typography
          variant="body1"
          component="p"
          textAlign={"center"}
          padding={1}
          color={cyan[900]}
        >
          Let's have a conversation and review your current life insurance
          portfolio in detail. In a rectangle, a link: “Meet with a Financial
          Specialist” These are some major life events that prompt you to
          evaluate your current policy: (ALL pictures and their labels will be
          placed one next to another in a row; three on top; three next row.
          Pictures are small icons). Picture: Starting a parenthood journey Pic:
          Become a homeowner Pic: Fluctuation in your income Pic: Shift in your
          health condition Pic: Undergoing a Marital Separation Pic: Saving for
          educational expenses
        </Typography>
      </Paper>
    </Box>
  );
};

export default LifeInsurance101;
