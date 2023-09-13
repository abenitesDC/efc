import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';
import React from 'react';
import { InlineWidget } from "react-calendly";


const Schedule = () => {
  return (
    <>
        <InlineWidget url="https://calendly.com/equityfamilycare/efc-intro-call?text_color=00695c&primary_color=00695c" />
    </>
  );
};

export default Schedule;