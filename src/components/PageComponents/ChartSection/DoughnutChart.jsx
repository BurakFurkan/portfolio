import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';

const DoughnutChart = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const options = useMemo(() => ({
    chart: {
      type: 'donut',
      background: 'transparent',
      animations: { enabled: true, speed: 600 },
      toolbar: { show: false },
    },
    labels: [t('Code'), t('Eat'), t('Sleep'), t('Sport'), t('Fun'), t('Learn')],
    colors: [
      theme.chart_c1b, theme.chart_c2b, theme.chart_c3b,
      theme.chart_c4b, theme.chart_c5b, theme.chart_c6b,
    ],
    dataLabels: { enabled: false },
    legend: {
      position: 'top',
      labels: { colors: theme.chart_text },
      fontSize: '11px',
    },
    title: {
      text: t('Activity Hours'),
      align: 'center',
      style: { color: theme.chart_text, fontSize: '13px', fontWeight: 500 },
    },
    stroke: { width: 2, colors: [theme.charts_bg] },
    tooltip: {
      theme: theme.themeNo === 1 ? 'dark' : 'light',
      y: { formatter: (v) => `${v}h` },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            total: {
              show: true,
              label: t('Total'),
              color: theme.chart_text,
              formatter: () => '24h',
            },
          },
        },
      },
    },
    theme: { mode: theme.themeNo === 1 ? 'dark' : 'light' },
  }), [theme, t]);

  const series = [8, 1, 8, 2, 2, 2];

  return (
    <Container>
      <ReactApexChart type="donut" options={options} series={series} width="100%" height="100%" />
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-radius: 7px;
  background-color: ${(p) => p.theme.charts_bg};
  grid-column: 3/5;
  grid-row: 1/7;

  @media (max-width: 1024px) {
    grid-column: 1/1;
    grid-row: 1/1;
    height: 280px;
  }
`;

export default DoughnutChart;
