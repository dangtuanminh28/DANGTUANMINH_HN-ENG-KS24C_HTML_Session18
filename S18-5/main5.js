let years = +prompt("Nhập số năm kinh nghiệm của nhân viên:");

if (isNaN(years) || years < 0) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    let category;

    if (years < 1) {
        category = "Mới vào nghề";
    } else if (years <= 3) {
        category = "Nhân viên có kinh nghiệm";
    } else if (years <= 6) {
        category = "Chuyên viên";
    } else {
        category = "Quản lý";
    }

    alert(`Xếp loại: ${category}`);
}
