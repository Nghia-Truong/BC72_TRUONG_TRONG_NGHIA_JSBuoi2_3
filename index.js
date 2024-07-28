/* Bài 1: Tính tiền lương nhân viên
input: 
    + Lương 1 ngày: number => đề bài cố định 100.000
    + Số ngày làm : number
progress:
    + lấy giá trị người dùng nhập vào (lương 1 ngày + số ngày làm)
    + công thức  = lương 1 ngày(100.000) * số ngày làm
    + Gán thẻ đáp án vào chỗ Kết quả
ouput:
    + tổng tiền lương
*/
document.getElementById('tinhTien').onclick = function () {
    var soNgayLam = document.getElementById('soNgayLam').value
    var outputTienLuong = 100000 * soNgayLam
    document.getElementById('tongTienLuong').innerHTML = outputTienLuong.toLocaleString() + 'VND'
}

/* Bài 2: Tính giá trị trung bình
input: 
    + 5 số thực : number
progress:
    + lấy giá trị người dùng nhập vào (5 số thực)
    + công thức  = tổng 5 số thực /5 **** chuyển từ string về number
    + Gán thẻ đáp án vào chỗ Kết quả
ouput:
    + Giá trị TB của 5 số
*/
document.getElementById('tinhTB').onclick = function () {
    var SoThuc1 = document.getElementById('soThuc1').value
    var SoThuc2 = document.getElementById('soThuc2').value
    var SoThuc3 = document.getElementById('soThuc3').value
    var SoThuc4 = document.getElementById('soThuc4').value
    var SoThuc5 = document.getElementById('soThuc5').value
    var outputTB = (Number(SoThuc1) + Number(SoThuc2) + Number(SoThuc3) + Number(SoThuc4) + Number(SoThuc5)) / 5
    document.getElementById('giaTriTB').innerHTML = outputTB
}

/* Bài 3: Quy đổi tiền
input: 
    + số tiền muốn đổi : number
progress:
    + lấy giá trị người dùng nhập vào (số tiền)
    + công thức  = số tiền *23500
    + Gán thẻ đáp án vào chỗ Kết quả
ouput:
    + Giá trị sau quy đổi
*/

document.getElementById('tinhQuyDoi').onclick = function () {
    var soTienQuyDoi = document.getElementById('soTienQuyDoi').value
    var outputQuyDoi = soTienQuyDoi * 23500
    document.getElementById('giaQuyDoi').innerHTML = new Intl.NumberFormat('vn-VN').format(outputQuyDoi) + 'VND'
}

/* Bài 4: Tính diện tích, chu vi HCN
input: 
    + Chiều dài, chiều rộng : number
progress:
    + lấy giá trị người dùng nhập vào (Chiều dài, chiều rộng)                 
    + chu vi  = (Chiều dài+ chiều rộng)*2   lưu ý, nhớ chuyển string về number
    + chu vi  = Chiều dài* chiều rộng 
    + Gán thẻ đáp án vào chỗ Kết quả
ouput:
    + Giá trị sau tính toán
*/
document.getElementById('tinhToan').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value
    var chieuRong = document.getElementById('chieuRong').value
    var outputCV = (Number(chieuDai) + Number(chieuRong)) * 2
    var outputDT = chieuDai * chieuRong
    document.getElementById('chuVi').innerHTML = 'Chu Vi:' + outputCV
    document.getElementById('dienTich').innerHTML = 'Diện tích:' + outputDT

}

/* Bài 5: Tính tổng 2 ký số
input: 
    + 1 số bất kì có 2 chữ số : number
progress:
    + lấy giá trị người dùng nhập vào (1 số bất kì có 2 chữ số)                 
    + số hàng đơn vị = số bất kì % 10 (chia lấy dư)
    + số hàng chục = (số bất kì - số hàng đơn vị) / 10
    + Gán thẻ đáp án vào chỗ Kết quả
output:
    + Giá trị sau tính toán
*/
document.getElementById('tinhKS').onclick = function () {
    var chuSo = document.getElementById('chuSo').value
    var hangChuc = (chuSo - (chuSo % 10)) / 10
    var hangDonVi = chuSo % 10
    var tong2KS = hangChuc + hangDonVi
    document.getElementById('tong2KS').innerHTML = 'Tổng 2 Ký Số:' + tong2KS
}
