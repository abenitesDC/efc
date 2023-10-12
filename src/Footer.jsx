import { Box, Link, Typography } from '@mui/material';
import './footer.scss';
import { cyan, teal } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box className='app--footer' sx={{ padding: 1, backgroundColor: cyan[900], color: cyan[500]}}>
      <Typography variant='caption' component={'div'} sx={{ fontSize: '10px'}}>
        <Box>
            <Link
            href="https://www.freepik.com/free-photo/family-hanging-out-jetty_49545807.htm"
            underline='none'
          >
            * Family running with dog, image by pikisuperstar
          </Link> on Freepik
        </Box>
        <Box>
            <Link
            href="https://www.freepik.com/free-photo/lovely-senior-couple-strolling-barefoot-along-beach-while-leaving-footsteps-wet-sand-beautiful-couple-enjoying-vacation-seashore-walking-holding-hands-love-holiday-concept_24705933.htm"
            underline='none'
          >
            * Two people walking on a beach, image by pch.vector
          </Link> on Freepik
        </Box>
        <Box>
          <Link
            href="https://www.freepik.com/free-photo/asian-businesswoman-participate-virtual-video-conference-meeting_38283885.htm"
            underline='none'
          >
            * Professional woman waving at laptop, image by our-team
          </Link> on Freepik
        </Box>
      </Typography>
      <Typography variant='caption'>
        Copyright ©2023 Equity Family Care Financial Services, New Jersey, NJ 07083 All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer;