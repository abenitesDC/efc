import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Tabs,
  Tab,
  Button,
  MenuItem,
  Select,
  Typography,
  FormControl,
  Modal,
  Backdrop,
  CircularProgress,
  InputLabel,
  Skeleton,
  TextField,
  Input,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { cyan, teal } from "@mui/material/colors";
import ReactGA from "react-ga4";

import { useForm, Controller } from "react-hook-form";
import { usaStates } from "typed-usa-states";
import { patternFormatter, removePatternFormat } from "react-number-format";
import LoadingButton from "@mui/lab/LoadingButton";

import { InlineWidget } from "react-calendly";

ReactGA.initialize([
  {
    trackingId: "G-VRS6H0GGWT",
    // gaOptions: {...}, // optional
    // gtagOptions: {...}, // optional
  },
  {
    trackingId: "your second GA measurement id",
  },
]);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const CONTACT_FORM_TAB_NAME = "contactFormTab";
const CONTACT_FORM_TAB_INDEX = 0;
const SCHEDULE_TAB_NAME = "scheduleTab";
const SCHEDULE_TAB_INDEX = 1;

const tabMap = {
  [CONTACT_FORM_TAB_INDEX]: CONTACT_FORM_TAB_NAME,
  [SCHEDULE_TAB_INDEX]: SCHEDULE_TAB_NAME,
};

const Schedule = () => {
  const [tabIndex, setTabName] = React.useState(CONTACT_FORM_TAB_INDEX);
  const [isSubmitLoading, setIsSubmitLoading] = React.useState(false);
  const [formSent, setFormSent] = React.useState(false);
  const navigate = useNavigate();
  const MAX_WIDTH_FORM = 800;

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      phoneNumber: "",
      financialGoal: "",
      income: "",
    },
  });

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: "/#/schedule",
      title: "Schedule page",
    });
  }, []);

  const handleChange = (_event, tabIndex) => {
    // Send a custom event
    ReactGA.event({
      category: "Booking",
      action: tabMap[tabIndex],
      label: tabMap[tabIndex], // optional
      // value: 1, // optional, must be a number
      // nonInteraction: true, // optional, true/false
      // transport: "xhr", // optional, beacon/xhr/image
    });

    setTabName(tabIndex);
  };

  const onSubmit = (data) => {
    // disables button to prevent double clicking
    setIsSubmitLoading(true);
    const params = new URLSearchParams(data);
    const url =
      "https://script.google.com/macros/s/AKfycbzTW2-LFCxXJtYmqVJBvilozrOyDMNCsYzbVLKoNk3cP6K3UxEabi8YDpDRSuYC64sjcA/exec";
    fetch(`${url}?${params}`, {
      method: "GET",
    }).then(() => {
      setIsSubmitLoading(false);
      setFormSent(true);
    });
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: cyan[900],
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: `2px solid ${cyan[900]}`,
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="Book your free quote or consultation"
        >
          <Tab label="Get a Quote" {...a11yProps(0)} />
          <Tab label="Book a Free Consultation" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tabIndex} index={CONTACT_FORM_TAB_INDEX}>
        <Typography
          variant="h5"
          component="p"
          textAlign={"left"}
          color={cyan[900]}
          paddingTop={1}
          paddingBottom={1}
        >
          Tell us about yourself
        </Typography>
        {/* <Box
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
        }}
      > */}
        <Typography
          variant="body1"
          component="p"
          textAlign={"left"}
          color={cyan[900]}
          paddingTop={1}
          paddingBottom={1}
        >
          Equity Family Care offers financial solutions and life insurance from
          America's Most Trusted Life Insurers.
        </Typography>
      {/* </Box> */}
        <Typography
          variant="body1"
          component="p"
          textAlign={"left"}
          color={cyan[900]}
          paddingTop={1}
          paddingBottom={1}
        >
          Share your details for personalized guidance from a financial
          professional best suited to your needs.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "8px 0",
              gap: "8px",
            }}
          >
             <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
            >
              <DatePicker />
              {/* <TextField
                id="dob"
                label="Date of birth"
                variant="standard"
                error={!!errors?.dob}
                helperText={errors?.dob?.message}
                {...register("dob", {
                  required: "Date of birth is required",
                  validate: (value) => !!value.trim(),
                })}
              /> */}
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
            >
              <TextField
                id="firstName"
                label="First Name"
                variant="standard"
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
                {...register("firstName", {
                  required: "First name is required",
                  validate: (value) => !!value.trim(),
                })}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
            >
              <TextField
                id="lastName"
                label="Last Name"
                variant="standard"
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
                {...register("lastName", {
                  required: "Last name is required",
                  validate: (value) => !!value.trim(),
                })}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
            >
              <TextField
                id="email"
                label="Email"
                variant="standard"
                type="email"
                error={!!errors?.email}
                helperText={errors?.email?.message}
                {...register("email", {
                  required: "Email is required",
                  validate: validateEmail,
                })}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
            >
              <Controller
                name="phoneNumber"
                control={control}
                rules={{
                  required: "Phone number is required",
                  validate: (value) => (!!value.trim() && value.replace(/\D+/g, '').length === 10) || 'Phone number is invalid',
                }}
                render={({ field }) => {
                  return (
                    <TextField
                      name="phoneNumber"
                      label="Phone Number"
                      variant="standard"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      error={!!errors?.phoneNumber}
                      helperText={errors?.phoneNumber?.message}
                    />
                  );
                }}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
              error={!!errors?.state}
            >
              <InputLabel id="state-label">State</InputLabel>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <>
                    <Select
                      labelId="state-label"
                      label="State"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      {usaStates.map((state) => (
                        <MenuItem
                          key={state.abbreviation}
                          value={state.abbreviation}
                        >
                          {state.abbreviation} - {state.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors?.state?.message}</FormHelperText>
                  </>
                )}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
              error={!!errors?.financialGoal}
            >
              <InputLabel id="financialGoal-label">
                Financial Goal (Optional)
              </InputLabel>
              <Controller
                name="financialGoal"
                control={control}
                rules={{}}
                render={({ field }) => (
                  <>
                    <Select
                      labelId="financialGoal-label"
                      label="financialGoal"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <MenuItem value={"income"}>Protect my income</MenuItem>
                      <MenuItem value={"college"}>Save for college</MenuItem>
                      <MenuItem value={"business"}>Grow my business</MenuItem>
                      <MenuItem value={"investments"}>
                        Grow my investments
                      </MenuItem>
                      <MenuItem value={"grow-family"}>
                        Plan for my growing family
                      </MenuItem>
                      <MenuItem value={"home"}>Buy a home</MenuItem>
                      <MenuItem value={"retirement"}>
                        Save for retirement
                      </MenuItem>
                      <MenuItem value={"protect-family"}>
                        Protect my family
                      </MenuItem>
                      <MenuItem value={"not-sure"}>I am not sure</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors?.financialGoal?.message}
                    </FormHelperText>
                  </>
                )}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", maxWidth: MAX_WIDTH_FORM }}
              variant="standard"
              error={!!errors?.income}
            >
              <InputLabel id="income-label">Income (Optional)</InputLabel>
              <Controller
                name="income"
                control={control}
                rules={{}}
                render={({ field }) => (
                  <>
                    <Select
                      labelId="income-label"
                      label="income"
                      value={field.value}
                      onChange={field.onChange}
                    >
                      <MenuItem value={"0-40000"}>Less than $40,000</MenuItem>
                      <MenuItem value={"40,000-75000"}>
                        $40,000 - 75,000
                      </MenuItem>
                      <MenuItem value={"75,001-100,000"}>
                        $75,001 - $100,000
                      </MenuItem>
                      <MenuItem value={"100,001-150,000"}>
                        $100,001 - $150,000
                      </MenuItem>
                      <MenuItem value={"150,001-200,000"}>
                        $150,001 - $200,000
                      </MenuItem>
                      <MenuItem value={"200,001-300,000"}>
                        $200,001 - $300,000
                      </MenuItem>
                      <MenuItem value={"300,001-more"}>
                        More than $300,000
                      </MenuItem>
                    </Select>
                    <FormHelperText>{errors?.income?.message}</FormHelperText>
                  </>
                )}
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "flex-end",
                width: "100%",
                maxWidth: MAX_WIDTH_FORM,
              }}
            >
              {isSubmitLoading ? (
                <>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={isSubmitLoading}
                    // onClick={handleClose}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                  <Skeleton variant="rounded">
                    <Button variant="contained">Submit</Button>
                  </Skeleton>
                </>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  disableRipple
                  disabled={isSubmitLoading}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </form>
        <Modal
          open={formSent}
          aria-labelledby="Contact form success message"
          aria-describedby="Your quote request was sent successfully. We are working hard on your request. Someone will contact you soon."
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Quote Request Sent Successfully
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, paddingBottom: 4 }}
            >
              Thank you for entrusting us with your information. We will review
              it, and reach out to you shortly for a free, zero-commitment
              personalized consultation.
            </Typography>
            <Button
              type="submit"
              variant="contained"
              disableRipple
              onClick={() => navigate("/")}
            >
              Go Home
            </Button>
          </Box>
        </Modal>
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={SCHEDULE_TAB_INDEX}>
        <InlineWidget url="https://calendly.com/equityfamilycare/efc-intro-call?text_color=00695c&primary_color=00695c" />
      </CustomTabPanel>
    </>
  );
};

export default Schedule;
