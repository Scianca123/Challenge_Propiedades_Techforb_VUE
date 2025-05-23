<script setup lang="ts">
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      LineElement,
      PointElement,
      CategoryScale,
      LinearScale,
      type ChartOptions
    } from 'chart.js';
    import { Line } from 'vue-chartjs';
    import crosshairPlugin from 'chartjs-plugin-crosshair';
    import { computed} from 'vue';

    // Registramos los componentes y plugin
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      LineElement,
      PointElement,
      CategoryScale,
      LinearScale,
      crosshairPlugin
      );

    // Datos de ejemplo
    const monthlySales = [20, 100, 50, 120, 80, 140, 60, 130, 70, 160, 90, 110];
    const monthlyRevenue = [50, 140, 70, 180, 100, 230, 130, 250, 120, 280, 160, 220];

    const labels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    const chartData = computed(() => ({
    labels,
    datasets: [
        {
        label: 'No. of Sales',
        data: monthlySales,
        borderColor: '#6B7480',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#6B7480',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 0,
        tension: 0.4,
        fill: false,
        },
        {
        label: 'Revenue',
        data: monthlyRevenue,
        borderColor: '#10B981',
        backgroundColor: (ctx: any) => {
            const chart = ctx.chart;
            const { ctx: canvasCtx, chartArea } = chart;
            if (!chartArea) return 'rgba(16,185,129,0.1)';
            const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
            );
            gradient.addColorStop(0, 'rgba(20, 226, 158, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
            return gradient;
        },
        borderDash: [8, 4],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointBackgroundColor: '#10B981',
        tension: 0.4,
        fill: true,
        },
    ],
    }));

    const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 800,
    easing: 'easeInOutQuart',
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      type: 'category' as const,
      ticks: { color: '#000000' },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#000000' },
      grid: { color: '#f0f0f0' },
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 12,
        padding: 16,
        color: '#000000',
        font: { weight: 'bold' },
      },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
      },
    },
    title: {
      display: true,
      text: '',
      font: { size: 18 },
      padding: { bottom: 20 },
    },
    // ⛔ TypeScript no reconoce esto
    crosshair: {
      line: {
        color: '#94a3b8',
        width: 1,
      },
      sync: { enabled: false },
      zoom: { enabled: false },
      snap: { enabled: true },
    },
  },
} as unknown as ChartOptions<'line'>;
</script>

<template>
    <div class="revenue-analytics">
        <div class="revenue-analytics__body">
        <Line
            class="revenue-analytics__chart"
            :data="chartData"
            :options="chartOptions"
            height="360px"
        />
        </div>
    </div>
</template>

<style lang="scss">
.revenue-analytics {
    background: transparent;
    width: 100%;

    &__body {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
    }

    &__chart {
        width: 100%;
        height: auto;
        max-width: 100%;
    }
    }
</style>