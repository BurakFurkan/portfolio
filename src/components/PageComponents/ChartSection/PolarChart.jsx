import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';

const PolarChart = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const options = useMemo(() => ({
    chart: {
      type: 'polarArea',
      background: 'transparent',
      animations: { enabled: true, speed: 600 },
      toolbar: { show: false },
    },
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    colors: [
      theme.chart_c1b, theme.chart_c2b, theme.chart_c3b,
      theme.chart_c4b, theme.chart_c5b,
    ],
    title: {
      text: t('Technologies'),
      align: 'center',
      style: { color: theme.chart_text, fontSize: '13px', fontWeight: 500 },
    },
    stroke: { width: 2, colors: [theme.charts_bg] },
    fill: { opacity: 0.25 },
    legend: {
      position: 'top',
      labels: { colors: theme.chart_text },
      fontSize: '11px',
    },
    dataLabels: { enabled: false },
    yaxis: { show: false },
    plotOptions: {
      polarArea: {
        rings: { strokeColor: theme.chart_grid },
        spokes: { strokeColor: theme.chart_grid },
      },
    },
    tooltip: {
      theme: theme.themeNo === 1 ? 'dark' : 'light',
      y: { formatter: (v) => `${v}%` },
    },
    theme: { mode: theme.themeNo === 1 ? 'dark' : 'light' },
  }), [theme, t]);

  const series = [95, 95, 80, 90, 80];

  return (
    <Container>
      <ReactApexChart type="polarArea" options={options} series={series} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-radius: 7px;
  background-color: ${(p) => p.theme.charts_bg};
  grid-column: 1/3;
  grid-row: 1/4;

  @media (max-width: 1024px) {
    grid-column: 1/1;
    grid-row: 5/5;
    height: 280px;
  }
`;

export default PolarChart;
