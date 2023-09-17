import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import { Link } from "react-router-dom";
import { cyan, teal } from "@mui/material/colors";

import beach from "./family-beach.jpeg";
import seniorWalkingBeach from "./senior-walking-beach.jpg";
import familyHangingOut from "./family-hanging-out-jetty.jpg";
import businesswoman from "./asian-businesswoman.jpg";
import { ReactComponent as Wave } from "./wave.svg";
// import Wave from './wave.svg';

import "./home.scss";

const Home = () => {
  return (
    <Box className="life-insurance-101">
      <Paper
        className="home-hero-image"
        square
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          backgroundImage: `url(${beach})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div></div>
      </Paper>
      <Box
        className="card"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          padding={1}
          color={teal[50]}
        >
          Welcome to Equity Family Care
        </Typography>
        <Card
          sx={{
            marginTop: 1,
            paddingBottom: 2,
            marginLeft: 2,
            marginRight: 2,
            padding: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="p"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Your partners in Family Financial Success
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign={"justify"}
              color={cyan[900]}
            >
              We're here as your devoted allies, protecting your family's dreams
              and securing their future. We have a genuine passion for helping
              you achieve your financial goals, and crafting personalized
              solutions that truly resonate with your needs.
            </Typography>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ width: "fit-content", background: cyan[900] }}
                to="/schedule"
                component={Link}
              >
                Connect with us
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      <Card sx={{ margin: 2, padding: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Plan for the future with our EverSafe Life Solutions
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign={"justify"}
              color={cyan[900]}
            >
              Envision the effect of the unexpected on your family's finances.
              Life insurance isn't only a safety net; it's a pledge of security
              for your loved ones. Starting early matters – for better rates and
              safeguarding your family's aspirations. Act now to provide peace
              of mind. Get a free quote to secure a better future.
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
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "50vw" }}
            image={familyHangingOut}
            alt="beach"
          />
        </Box>
      </Card>

      <Card sx={{ margin: 2, padding: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: "50vw" }}
            image={seniorWalkingBeach}
            alt="beach"
          />
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Annuities: Shaping Your Secure Retirement Journey
            </Typography>
            <Typography
              variant="h6"
              component="p"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Embark on a journey of financial empowerment and secure your
              retirement future like never before.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign={"justify"}
              color={cyan[900]}
            >
              Empower your retirement journey with annuities. Let Equity Family
              Care be your guide to understanding this transformative tool.
              We'll clear the path to informed choices, ensuring a future of
              clarity and confidence. Speak to our experts for a brighter
              retirement ahead.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign={"justify"}
              color={cyan[900]}
              paddingTop={4}
              sx={{
                fontWeight: 400,
              }}
            >
              Let's chat about annuities, explore your options, and design a
              retirement roadmap that's as bright as your dreams. Your future
              awaits - let's shape it together. Reach out to us today to start
              the conversation. Your retirement dreams are closer than you
              think!
            </Typography>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ width: "fit-content", background: cyan[900] }}
                to="/schedule"
                component={Link}
              >
                Talk to us
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>

      <Card sx={{ margin: 2, padding: 2 }} variant="none">
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Illuminating Your Empowered Path in Financial Life.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontWeight: 400,
              }}
              textAlign={"justify"}
              color={cyan[900]}
            >
              Are you ready to take charge of your financial destiny? Join us
              for an exclusive opportunity to learn from seasoned financial
              specialists who are passionate about empowering you. Whether
              you're navigating life insurance to safeguard your loved ones,
              considering the stability of annuities, or exploring smart
              investment strategies, our experts are here to demystify these
              crucial aspects of financial planning.
            </Typography>
          </CardContent>
        </Box>
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
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
                sx={{
                  fontWeight: 400,
                }}
              >
                Protecting those dearest to your heart
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                component={Link}
                size="large"
                sx={{ width: "fit-content", background: cyan[900], textAlign: 'center' }}
                to="/schedule"
                variant="contained"
              >
                Safeguard wisely
                <HealthAndSafetyIcon sx={{ marginLeft: 1 }} />
              </Button>
            </CardActions>
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
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
                sx={{
                  fontWeight: 400,
                }}
              >
                Shaping and building your retirement dreams
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ width: "fit-content", background: cyan[900], textAlign: 'center' }}
                to="/schedule"
                component={Link}
              >
                Save Mindfully
                <SavingsOutlinedIcon sx={{ marginLeft: 1 }} />
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              margin: 2,
              padding: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h4"
                textAlign={"center"}
                padding={1}
                color={cyan[900]}
                sx={{
                  fontWeight: 400,
                }}
              >
                Crafting Thoughtful Investment Choices for Optimal Returns
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ width: "fit-content", background: cyan[900], textAlign: 'center' }}
                to="/schedule"
                component={Link}
              >
                Invest Smartly
                <ShowChartRoundedIcon sx={{ marginLeft: 1 }} />
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Card>

      <Card sx={{ margin: 2, padding: 2 }} variant="outlined">
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              textAlign={"center"}
              padding={1}
              color={cyan[900]}
            >
              Your Financial Dreams are our Commitment
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign={"justify"}
              color={cyan[900]}
            >
              Let's connect to explore your aspirations, concerns, and dreams.
              Our team of dedicated financial specialists is eager to address
              all your questions, provide insights, and collaborate with you to
              design a tailored roadmap toward your goals. Your financial
              well-being is our priority, and together, we'll navigate the path
              to your brighter future.
            </Typography>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 4 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ width: "fit-content", background: cyan[900] }}
                to="/schedule"
                component={Link}
              >
                Let's connect
              </Button>
            </CardActions>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "50vw" }}
            image={businesswoman}
            alt="beach"
          />
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
