// ملف JavaScript الرئيسي

// التحقق من تسجيل الدخول باستخدام OAuth2 (مثل Google)
function checkLogin() {
    // هنا يمكنك إضافة منطق التحقق من تسجيل الدخول
}

// إضافة مهمة جديدة
document.getElementById('add-task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // جمع بيانات المهمة من النموذج
    const task = {
        name: document.getElementById('task-name').value,
        desc: document.getElementById('task-desc').value,
        dueDate: document.getElementById('due-date').value,
        assignee: document.getElementById('assignee').value,
        priority: document.getElementById('priority').value,
        status: document.getElementById('status').value,
        attachment: document.getElementById('attachment').files[0] || null
    };
    // إرسال المهمة إلى Contentful أو تخزينها محلياً
    alert('تم إضافة المهمة بنجاح!');
    // إرسال إشعار بالبريد الإلكتروني
    sendEmailNotification(task);
    // إعادة توجيه المستخدم إلى لوحة التحكم
    window.location.href = 'tasks.html';
});

// إرسال إشعار بالبريد الإلكتروني
function sendEmailNotification(task) {
    // يمكنك استخدام خدمة مثل EmailJS أو تكامل مع خدمة بريد إلكتروني
}

// عرض المهام في لوحة التحكم
function displayTasks() {
    // جلب المهام من Contentful أو مصدر البيانات الخاص بك
    const tasks = []; // استبدل هذا بالمهام الفعلية

    // تقسيم المهام حسب الحالة
    const newTasks = tasks.filter(task => task.status === 'جديدة');
    const inProgressTasks = tasks.filter(task => task.status === 'قيد التنفيذ');
    const completedTasks = tasks.filter(task => task.status === 'مكتملة');

    // عرض المهام في الأقسام المناسبة
    // يمكنك استخدام DOM لإضافة المهام إلى القوائم
}

// استدعاء الدالة عند تحميل صفحة لوحة التحكم
if (window.location.pathname.includes('tasks.html')) {
    displayTasks();
}

