Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: '2014-2019澳洲.法國.加拿大入境旅客人數比較圖'
  },
  subtitle: {
    text: '資料來源:UNWTO'
  },
  xAxis: {
    categories: ['2014', '2015', '2016', '2017', '2018', '2019']
  },
  yAxis: {
    title: {
      text: '入境人數(單位:百萬)'
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: '澳洲',
    marker: {
      symbol: 'square'
    },
    data: [6.9, 7.4, 8.2, 8.8, 9.2, 9.5,]
  }, 
    {
    name: '法國',
    marker: {
      symbol: 'diamond'
    },
    data: [83.7, 84.5, 82.7, 86.9, 89.4, 37.4,]
  },
  {
    name: '加拿大',
    marker: {
      symbol: 'circle'
    },
    data: [16.5, 18, 21, 20.9, 21.1, 22.1,]
  }]
});