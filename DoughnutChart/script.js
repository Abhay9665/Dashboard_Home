window.onload = function () {
    const ctx = document.getElementById('myDonutChart').getContext('2d');
    const myDonutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Attended', 'Not Attended'], // Labels for the segments
            datasets: [{
                data: [23, 77], // Data values corresponding to the percentages
                backgroundColor: ['#36a2eb', '#ff6384'], // Segment colors
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    display: true, // Ensure datalabels are displayed
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    formatter: (value) => {
                        return `${value}%`; // Display static percentages
                    },
                    anchor: 'center', // Position the labels in the center of each segment
                    align: 'center', // Center the text within each segment
                    clamp: true // Prevent the labels from overflowing outside the segments
                },
                tooltip: {
                    enabled: false // Disable tooltips
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '30%', // Adjust donut thickness
            layout: {
                padding: {
                    top: 20
                }
            }
        }
    });
}
