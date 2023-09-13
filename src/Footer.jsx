import { Box, Typography } from '@mui/material';
import './footer.scss';

const Footer = () => {
  return (
    <Box className='app--footer' sx={{ padding: 1 }}>
      <Typography variant='caption'>
        Copyright ©2023 Equity Family Care Financial Services, New Jersey, NJ 07083 All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer;