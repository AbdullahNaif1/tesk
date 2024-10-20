// إنشاء الرسم البياني باستخدام Chart.js

const ctx = document.getElementById('tasksChart').getContext('2d');

// بيانات افتراضية
const data = {
    labels: ['مهام جديدة', 'قيد التنفيذ', 'مكتملة'],
    datasets: [{
        label: 'عدد المهام',
        data: [12, 19, 7],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(75,192,192,1)'
        ],
        borderWidth: 1
    }]
};

const tasksChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

