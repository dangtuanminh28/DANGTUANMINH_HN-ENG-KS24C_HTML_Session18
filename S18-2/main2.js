let toan = +prompt("Nhập điểm Toán:");
let van = +prompt("Nhập điểm Văn:");
let anh = +prompt("Nhập điểm Anh:");

if (isNaN(math) || isNaN(literature) || isNaN(english) || math < 0 || literature < 0 || english < 0 || math > 10 || literature > 10 || english > 10) {
    alert("Vui lòng nhập điểm hợp lệ từ 0 đến 10!");
} else {
    let score = (math + literature + english) / 3;
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
