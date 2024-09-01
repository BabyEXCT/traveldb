declare module 'react-apexcharts' {
  import { Component } from 'react';
  import ApexCharts from 'apexcharts';

  export interface Props {
    options: ApexCharts.ApexOptions;
    series: ApexCharts.ApexOptions['series'];
    type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'scatter' | 'bubble' | 'heatmap' | 'radialBar' | 'candlestick' | 'radar' | 'rangeBar' | 'treemap' | 'boxPlot' | 'polarArea';
    width?: string | number;
    height?: string | number;
  }

  export default class ReactApexChart extends Component<Props> {}
}
