import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ data, options }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Destroy the previous chart instance before rendering a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, [data, options]);

  return <canvas ref={chartRef} />;
}


export default Chart;