import { AgChartProps } from 'ag-charts-react'

export const chartOptions: AgChartProps['options'] = {
  data: [],
  title: {
    text: 'Votes pro Tag',
  },
  background: {
    visible: false,
  },
  theme: {
    params: {
      foregroundColor: '#D4AF37',
    },
  },
  series: [
    {
      type: 'line',
      xKey: 'date',
      yKey: 'count',
      yName: 'Anzahl',
      xName: 'Anzahl',
    },
  ],
}
