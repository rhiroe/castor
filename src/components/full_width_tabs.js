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

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
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
          <Pie height={200} legend={{position: 'bottom'}} data={data} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Pie height={200} legend={{position: 'bottom'}} data={data} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Pie height={200} legend={{position: 'bottom'}} data={data} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Pie height={200} legend={{position: 'bottom'}} data={data} />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Pie height={200} legend={{position: 'bottom'}} data={data} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
