import { useContext } from 'react';
import { Context } from '../states/GlobalContext';
// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Graph = () => {
  const { favourites } = useContext(Context);

  const chartData = [];

  {
    favourites.map((show) => {
      chartData.push({
        label: show.name,
        value: show.rating ? show.rating.average : 'rating',
      });
    });
  }

  const chartConfigs = {
    type: 'column2d', // The chart type
    width: '780', // Width of the chart
    height: '380', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Rating Chart', //Set the chart caption

        xAxisName: 'Tv Shows', //Set the x-axis name
        yAxisName: 'Rating', //Set the y-axis name
        // numberSuffix: "K",
        theme: 'candy', //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Graph;
