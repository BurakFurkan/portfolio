import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const options = useMemo(() => ({
    chart: {
      type: 'radar',
      background: 'transparent',
      animations: { enabled: true, speed: 600 },
      toolbar: { show: false },
    },
    colors: [theme.chart_c2b],
    title: {
      text: t('Qualifications'),
      align: 'center',
      style: { color: theme.chart_text, fontSize: '13px', fontWeight: 500 },
    },
    xaxis: {
      categories: [
        t('Communication Skills'), t('Team Work'), t('Good Manners'),
        t('Curiosity'), t('Passion'), t('Result Orientation'),
      ],
      labels: { style: { colors: Array(6).fill(theme.chart_text), fontSize: '11px' } },
    },
    yaxis: { show: false, min: 0, max: 100 },
    fill: { opacity: 0.2 },
    stroke: { width: 2 },
    markers: { size: 4 },
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      radar: { polygons: { strokeColors: theme.chart_grid, fill: { colors: ['transparent'] } } },
    },
    tooltip: {
      theme: theme.themeNo === 1 ? 'dark' : 'light',
      y: { formatter: (v) => `${v}%` },
    },
    theme: { mode: theme.themeNo === 1 ? 'dark' : 'light' },
  }), [theme, t]);

  const series = useMemo(() => ([{
    name: '%',
    data: [88, 90, 100, 92, 94, 96],
  }]), []);

  return (
    <Container>
      <ReactApexChart type="radar" options={options} series={series} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-radius: 7px;
  background-color: ${(p) => p.theme.charts_bg};
  grid-column: 5/7;
  grid-row: 4/7;

  @media (max-width: 1024px) {
    grid-column: 1/1;
    grid-row: 4/4;
    height: 280px;
  }
`;

export default RadarChart;
