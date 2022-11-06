import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import why from './why.jpg'
import refug from './refug.jpg';
import smallbiz from './smallbiz.jpg';
// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Uddham </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Hi, we are Uddham!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
           We bridge the gap between the refugees or the homeless who have left their home country due to wars and conflicts in-process helping the small-scale businesses.
          </Typography>

          <Box
            component="img"
            src="https://static.vecteezy.com/system/resources/previews/004/708/692/non_2x/letter-u-logo-design-modern-letter-u-logo-illustration-vector.jpg"
            sx={{ height: 160, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Button to="/" size="large" variant="contained" component={RouterLink}>
            Go to Login/Signup Page
          </Button>
        </StyledContent>

        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ color: 'black' }} paragraph>
            So, What's the problem?
          </Typography>
          &nbsp;

          <Typography sx={{ color: 'text.secondary' }}>
            For refugees crossing border, coming to a new country, How will they manage their expenses?, If the city they'll be living in will be safe to travel?, If there's any charity event that will help them settle into the new country?
          </Typography>
&nbsp;
          <Typography sx={{ color: 'text.secondary' }}>
           For a small-scale business person worrying about his sales after pandemic, Do I need to set up a whole website to increase my sales? How do I reduce the price like Amazon, or Shopify when I don't sell in large numbers?
          </Typography>
          {/* <p>
          <Box
            component="img"
            src={refug}
            sx={{ height: 360, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
          <Box
            component="img"
            src={smallbiz}
            sx={{ height: 460, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />
</p> */}
        </StyledContent>
      </Container>
    </>
  );
}
