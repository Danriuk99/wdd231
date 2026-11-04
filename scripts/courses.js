document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming.',
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web.',
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students spend time learning functions.',
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the concepts of classes.',
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will help students understand dynamic web pages.',
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Web Frontend Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will focus on user experience and web frontend practices.',
            completed: false
        }
    ];

    const coursesContainer = document.getElementById('courses');
    const totalCreditsEl = document.getElementById('totalCredits');
    const btnAll = document.getElementById('all');
    const btnWdd = document.getElementById('wdd');
    const btnCse = document.getElementById('CSE');

    function displayCourses(filteredCourses) {
        coursesContainer.innerHTML = '';
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.classList.add('course-card');
            if (course.completed) {
                card.classList.add('completed');
            }
            card.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
            coursesContainer.appendChild(card);
        });

        const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsEl.textContent = `Total Credits Required: ${total}`;
    }

    if (btnAll) btnAll.addEventListener('click', () => displayCourses(courses));
    if (btnWdd) btnWdd.addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'WDD')));
    if (btnCse) btnCse.addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'CSE')));

    displayCourses(courses);

    const menuButton = document.getElementById('menu');
    const navBar = document.querySelector('.nav-bar');

    if (menuButton && navBar) {
        menuButton.addEventListener('click', () => {
            navBar.classList.toggle('open');
            if (navBar.classList.contains('open')) {
                menuButton.textContent = 'X';
            } else {
                menuButton.textContent = '☰';
            }
        });
    }
});