document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            window.location.href = 'trangchu_dangnhap.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            console.log(storedUsername);
            console.log(storedPassword);
            if (username === storedUsername && password === storedPassword) {
                alert('Đăng nhập thành công!');
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('username', username);
                window.location.href = 'trangchu.html';
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không đúng!');
            }
        });
    }

    if (window.location.pathname.endsWith('trangchu.html')) {
        const isLoggedIn = sessionStorage.getItem('loggedIn');
        const welcomeMessage = document.getElementById('welcome-message');
        if (isLoggedIn) {
            const username = sessionStorage.getItem('username');
            const loginItem = document.getElementById('login-item');
            loginItem.style.display = 'none';
            const registerItem = document.getElementById('register-item');
            registerItem.style.display = 'none';
            welcomeMessage.textContent = `Xin chào, ${username}!`;
        }
    }
});
