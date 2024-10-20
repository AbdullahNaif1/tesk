
// تفعيل السحب والإفلات باستخدام Sortable.js

const newTasksList = document.getElementById('new-tasks');
const inProgressTasksList = document.getElementById('in-progress-tasks');
const completedTasksList = document.getElementById('completed-tasks');

const sortableNew = new Sortable(newTasksList, {
    group: 'tasks',
    animation: 150,
    onEnd: updateTaskStatus
});

const sortableInProgress = new Sortable(inProgressTasksList, {
    group: 'tasks',
    animation: 150,
    onEnd: updateTaskStatus
});

const sortableCompleted = new Sortable(completedTasksList, {
    group: 'tasks',
    animation: 150,
    onEnd: updateTaskStatus
});

function updateTaskStatus(evt) {
    const item = evt.item;
    const newStatus = evt.to.id;

    // تحديث حالة المهمة في Contentful أو مصدر البيانات
    // newStatus: 'new-tasks', 'in-progress-tasks', 'completed-tasks'
}

