import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const options = useMemo(() => ({
    chart: {
      type: 'line',
      background: 'transparent',
      animations: { enabled: true, speed: 600 },
      toolbar: { show: false },
    },
    colors: [theme.chart_c1b, theme.chart_c4b],
    title: {
      text: t('Success/Boredom Chart'),
      align: 'center',
      style: { color: theme.chart_text, fontSize: '13px', fontWeight: 500 },
    },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
      categories: [t('January'), t('February'), t('March'), t('April'), t('May'), t('June'), t('July')],
      labels: { style: { colors: Array(7).fill(theme.chart_text), fontSize: '11px' } },
      axisBorder: { color: theme.chart_grid },
      axisTicks: { color: theme.chart_grid },
    },
    yaxis: {
      min: 0,
      labels: { style: { colors: [theme.chart_text], fontSize: '11px' } },
    },
    grid: { borderColor: theme.chart_grid },
    markers: { size: 4 },
    legend: {
      position: 'top',
      labels: { colors: theme.chart_text },
      fontSize: '11px',
    },
    dataLabels: { enabled: false },
    tooltip: { theme: theme.themeNo === 1 ? 'dark' : 'light' },
    theme: { mode: theme.themeNo === 1 ? 'dark' : 'light' },
  }), [theme, t]);

  const series = useMemo(() => ([
    { name: t('Success'), data: [15, 28, 43, 56, 77, 88, 99] },
    { name: t('Boredom'), data: [50, 43, 36, 28, 20, 12, 5] },
  ]), [t]);

  return (
    <Container>
      <ReactApexChart type="line" options={options} series={series} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-radius: 7px;
  background-color: ${(p) => p.theme.charts_bg};
  grid-column: 1/3;
  grid-row: 4/7;

  @media (max-width: 1024px) {
    grid-column: 1/1;
    grid-row: 3/3;
    height: 240px;
  }
`;

export default LineChart;
