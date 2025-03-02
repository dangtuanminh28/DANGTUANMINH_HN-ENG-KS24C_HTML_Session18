// Yêu cầu người dùng nhập một số nguyên
let number = parseInt(prompt("Nhập một số nguyên:"));

// Kiểm tra nếu người dùng nhập không phải số
if (isNaN(number)) {
    alert("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    // Kiểm tra chẵn hay lẻ
    if (number % 2 === 0) {
        alert(`${number} là số chẵn.`);
    } else {
        alert(`${number} là số lẻ.`);
    }
}
