import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Uddham | Member Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi Uddham Member, Thank you for helping those in need ❤️
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Events Held" total={150} icon={'ant-design:usergroup-add-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Donations" total={"$1.5mn"} color="info" icon={'ant-design:dollar-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Homeless" total={41290} color="warning" icon={'ant-design:home-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Shelter Capacity" total={64} color="error" icon={'ant-design:home-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Change in Homeless Population"
              subheader="-37.84% since last year"
              chartLabels={[
                '01/01/2015',
                '01/01/2016',
                '01/01/2017',
                '01/01/2018',
                '01/01/2019',
                '01/01/2020',
                '01/01/2021',
                '01/01/2022',
              ]}
              chartData={[
                {
                  name: 'Population',
                  type: 'line',
                  fill: 'solid',
                  data: [42000, 48213,49179,52564,58924,65000,41290, 50000],
                }
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Zone Wise Distribution"
              chartData={[
                { label: 'Zone 1', value: 15541 },
                { label: 'Zone 2', value: 13982 },
                { label: 'Zone 3', value: 11767 },
              ]}
              chartColors={[
                theme.palette.warning.main,
                theme.palette.info.main,
                theme.palette.primary.main,
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Raise donations for Fruit Seller near 2, Soge Lane' },
                { id: '2', label: 'Organise a workshop for mental health for refugees and homeless ' },

              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
