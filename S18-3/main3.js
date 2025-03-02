let username = +prompt("Nhập tên đăng nhập:");

if (username === null || username.trim() === "") {
    alert("Cancelled");
} else if (username === "ADMIN") {
    let password = +prompt("Nhập mật khẩu:");

    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null || password.trim() === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don’t know you");
}
