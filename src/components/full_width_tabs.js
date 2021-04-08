import React from 'react';
import { Pie } from 'react-chartjs-2';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './tab_panel';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const option = {
    legend: {
      position: 'bottom',
    },
    tooltips: {
      callbacks: {
        title: (tooltipItem, data) => data['labels'][tooltipItem[0]['index']],
        label: (tooltipItem, data) => ` ${data['datasets'][0]['data'][tooltipItem['index']].toLocaleString()}円`,
      }
    }
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [...Array(6)].map(() => Math.floor(Math.random()*10000)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="1月" {...a11yProps(0)} />
        <Tab label="2月" {...a11yProps(1)} />
        <Tab label="3月" {...a11yProps(2)} />
        <Tab label="4月" {...a11yProps(3)} />
        <Tab label="5月" {...a11yProps(4)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Pie options={option} height={200} data={data} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Pie options={option} height={200} data={data} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Pie options={option} height={200} data={data} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Pie options={option} height={200} data={data} />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Pie options={option} height={200} data={data} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
