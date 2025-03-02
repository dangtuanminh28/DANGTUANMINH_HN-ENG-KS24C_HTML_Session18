let toan = +prompt("Nhập điểm Toán:");
let van = +prompt("Nhập điểm Văn:");
let anh = +prompt("Nhập điểm Anh:");

if (isNaN(toan) || isNaN(van) || isNaN(anh) || toan < 0 || van < 0 || anh < 0 || toan > 10 || van > 10 || anh > 10) {
    alert("Vui lòng nhập điểm hợp lệ từ 0 đến 10!");
} else {
    let score = (toan + van + anh) / 3;
    let category;
    if (score >= 8.0) {
        category = "Giỏi";
    } else if (score >= 6.5) {
        category = "Khá";
    } else if (score >= 5.0) {
        category = "Trung bình";
    } else {
        category = "Yếu";
    }
    alert(`Điểm trung bình: ${score.toFixed(2)}\nXếp loại: ${category}`);
}
