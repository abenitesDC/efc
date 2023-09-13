import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { cyan, teal } from '@mui/material/colors';
// import { ReactComponent as EcvLogo } from './efc-logo-inverse.svg';
import efcLogo from './efc-logo-inverse.png';

import './logo.scss';

const Logo = () => {
  return (
    <Box className='app--logo' sx={{ backgroundColor: cyan[900], display: 'flex', color: teal[50], gap: 1, alignItems: 'flex-start', paddingTop: 2}}>
      <Link to='/'>
        <img src={efcLogo} alt='EFC' />
        <Typography variant="h5" component="h2">
            EFC
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
