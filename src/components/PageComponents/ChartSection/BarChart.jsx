import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const options = useMemo(() => ({
    chart: {
      type: 'bar',
      background: 'transparent',
      animations: { enabled: true, speed: 600 },
      toolbar: { show: false },
    },
    colors: [theme.chart_c1b],
    title: {
      text: t('Daily Work Hours'),
      align: 'center',
      style: { color: theme.chart_text, fontSize: '13px', fontWeight: 500 },
    },
    xaxis: {
      categories: [t('Monday'), t('Tuesday'), t('Wednesday'), t('Thursday'), t('Friday'), t('Saturday'), t('Sunday')],
      labels: { style: { colors: Array(7).fill(theme.chart_text), fontSize: '11px' } },
      axisBorder: { color: theme.chart_grid },
      axisTicks: { color: theme.chart_grid },
    },
    yaxis: {
      labels: { style: { colors: [theme.chart_text], fontSize: '11px' } },
    },
    grid: { borderColor: theme.chart_grid },
    plotOptions: {
      bar: { borderRadius: 4, columnWidth: '55%' },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: {
      theme: theme.themeNo === 1 ? 'dark' : 'light',
      y: { formatter: (v) => `${v}h` },
    },
    theme: { mode: theme.themeNo === 1 ? 'dark' : 'light' },
  }), [theme, t]);

  const series = useMemo(() => ([{
    name: t('Hour'),
    data: [8, 8, 8, 8, 8, 3, 3],
  }]), [t]);

  return (
    <Container>
      <ReactApexChart type="bar" options={options} series={series} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-radius: 7px;
  background-color: ${(p) => p.theme.charts_bg};
  grid-column: 5/7;
  grid-row: 1/4;

  @media (max-width: 1024px) {
    grid-column: 1/1;
    grid-row: 2/2;
    height: 240px;
  }
`;

export default BarChart;
