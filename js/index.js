console.log("first");
import ChucNang from "./chucnang.js";
import PerSon, { KhachHang, NhanVien, SinhVien } from "./objects.js";
import CheckInput from "./validation.js";

let sinhVien = new SinhVien();
let nhanVien = new NhanVien();
let khachHang = new KhachHang();
let chucNang = new ChucNang();
let checkInput = new CheckInput();

chucNang.goiLocal();
chucNang.renderGiaoDien();
chucNang.doDuLieuChoSort();

document.getElementById("themMoi").addEventListener("click", () => {
  chucNang.tatMoForm();
  chucNang.resetForm();
  document.getElementById("sinhVien").classList.add("none");
  document.getElementById("nhanVien").classList.add("none");
  document.getElementById("khachHang").classList.add("none");
  document.getElementById("doiTuong").value = "";
  document.getElementById("doiTuong").disabled = false;
  document.getElementById("ma").disabled = false;
  document.getElementById("ketQua").innerHTML = "";
});

document.getElementById("overlay").addEventListener("click", () => {
  chucNang.tatMoForm();
});

document.getElementById("closer").addEventListener("click", () => {
  chucNang.tatMoForm();
});

document.getElementById("doiTuong").addEventListener("change", () => {
  let mySelect = document.getElementById("doiTuong").value;
  if (mySelect == "sinh viên") {
    document.getElementById("sinhVien").classList.remove("none");
    document.getElementById("nhanVien").classList.add("none");
    document.getElementById("khachHang").classList.add("none");
  } else if (mySelect == "nhân viên") {
    document.getElementById("sinhVien").classList.add("none");
    document.getElementById("nhanVien").classList.remove("none");
    document.getElementById("khachHang").classList.add("none");
  } else if (mySelect == "khách hàng") {
    document.getElementById("sinhVien").classList.add("none");
    document.getElementById("nhanVien").classList.add("none");
    document.getElementById("khachHang").classList.remove("none");
  } else {
    document.getElementById("sinhVien").classList.add("none");
    document.getElementById("nhanVien").classList.add("none");
    document.getElementById("khachHang").classList.add("none");
  }
});

document.getElementById("luuDoiTuongMoi").addEventListener("click", () => {
  let mySelect = document.getElementById("doiTuong").value;
  if (mySelect == "") {
    let valid = true;
    valid =
      checkInput.checkMa("ma", "checkMa") &
      checkInput.checkTen("ten", "checkTen") &
      checkInput.checkEmail("email", "checkEmail") &
      checkInput.checkDiaChi("diaChi", "checkDiaChi") &
      checkInput.checkMa("doiTuong", "checkDoiTuong") &
      checkInput.checkDiem("toan", "checkDiemToan") &
      checkInput.checkDiem("ly", "checkDiemLy") &
      checkInput.checkDiem("hoa", "checkDiemHoa") &
      checkInput.checkSoNgayLam("soNgayLam", "checkSoNgayLam") &
      checkInput.checkTienLuong("luongNgay", "checkLuongNgay") &
      checkInput.checkTen("tenCty", "checkTenCTy") &
      checkInput.checkTienLuong("giaTriHd", "checkGiaTriHd");

    if (!valid) {
      return;
    }
    return;
  } else {
    let personInputs = document.querySelectorAll(
      "#myForm #person input, select "
    );

    if (mySelect == "sinh viên") {
      let inputSinhVien = document.querySelectorAll("#myForm #sinhVien input");
      let allInputs = [...personInputs, ...inputSinhVien];

      for (let inputSinhVien of allInputs) {
        let { id, value } = inputSinhVien;
        if (id == "toan" || id == "ly" || id == "hoa") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        sinhVien[id] = value;
      }
      let valid = true;
      valid =
        checkInput.checkMa("ma", "checkMa") &
        checkInput.checkTen("ten", "checkTen") &
        checkInput.checkEmail("email", "checkEmail") &
        checkInput.checkDiaChi("diaChi", "checkDiaChi") &
        checkInput.checkMa("doiTuong", "checkDoiTuong") &
        checkInput.checkDiem("toan", "checkDiemToan") &
        checkInput.checkDiem("ly", "checkDiemLy") &
        checkInput.checkDiem("hoa", "checkDiemHoa");
      if (!valid) {
        return;
      }

      chucNang.themDoiTuong(sinhVien);
    } else if (mySelect == "nhân viên") {
      let inputnhanVien = document.querySelectorAll("#myForm #nhanVien input");
      let allInputs = [...personInputs, ...inputnhanVien];
      for (let inputnhanVien of allInputs) {
        let { id, value } = inputnhanVien;
        if (id == "soNgayLam" || id == "luongNgay") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        nhanVien[id] = value;
      }
      let valid = true;
      valid =
        checkInput.checkMa("ma", "checkMa") &
        checkInput.checkTen("ten", "checkTen") &
        checkInput.checkEmail("email", "checkEmail") &
        checkInput.checkDiaChi("diaChi", "checkDiaChi") &
        checkInput.checkMa("doiTuong", "checkDoiTuong") &
        checkInput.checkSoNgayLam("soNgayLam", "checkSoNgayLam") &
        checkInput.checkTienLuong("luongNgay", "checkLuongNgay");
      if (!valid) {
        return;
      }

      chucNang.themDoiTuong(nhanVien);
    } else if (mySelect == "khách hàng") {
      let inputKhachHang = document.querySelectorAll(
        "#myForm #khachHang input"
      );
      let allInputs = [...personInputs, ...inputKhachHang];
      for (let inputKhachHang of allInputs) {
        let { id, value } = inputKhachHang;
        if (id == "giaTriHd") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        khachHang[id] = value;
      }
      let valid = true;
      valid =
        checkInput.checkMa("ma", "checkMa") &
        checkInput.checkTen("ten", "checkTen") &
        checkInput.checkEmail("email", "checkEmail") &
        checkInput.checkDiaChi("diaChi", "checkDiaChi") &
        checkInput.checkMa("doiTuong", "checkDoiTuong") &
        checkInput.checkTen("tenCty", "checkTenCTy") &
        checkInput.checkTienLuong("giaTriHd", "checkGiaTriHd");
      if (!valid) {
        return;
      }

      chucNang.themDoiTuong(khachHang);
    }

    chucNang.luuLocal();
    chucNang.goiLocal();
    chucNang.renderGiaoDien();
  }

  chucNang.doDuLieuChoSort();
});

document.getElementById("capNhatDoiTuong").addEventListener("click", () => {
  let mySelect = document.getElementById("doiTuong").value;
  if (mySelect == "") {
    return;
  } else {
    let personInputs = document.querySelectorAll(
      "#myForm #person input, select "
    );
    // console.log(personInputs);
    if (mySelect == "sinh viên") {
      let inputSinhVien = document.querySelectorAll("#myForm #sinhVien input");
      let allInputs = [...personInputs, ...inputSinhVien];
      for (let inputSinhVien of allInputs) {
        let { id, value } = inputSinhVien;
        if (id == "toan" || id == "ly" || id == "hoa") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        sinhVien[id] = value;
      }
      chucNang.capNhat(sinhVien);
    } else if (mySelect == "nhân viên") {
      let inputnhanVien = document.querySelectorAll("#myForm #nhanVien input");
      let allInputs = [...personInputs, ...inputnhanVien];
      for (let inputnhanVien of allInputs) {
        let { id, value } = inputnhanVien;
        if (id == "soNgayLam" || id == "luongNgay") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        nhanVien[id] = value;
      }
      chucNang.capNhat(nhanVien);
    } else if (mySelect == "khách hàng") {
      let inputKhachHang = document.querySelectorAll(
        "#myForm #khachHang input"
      );
      let allInputs = [...personInputs, ...inputKhachHang];
      for (let inputKhachHang of allInputs) {
        let { id, value } = inputKhachHang;
        if (id == "giaTriHd") {
          value = Number(value);
        } else {
          value = value.toLowerCase().trim();
        }
        khachHang[id] = value;
      }
      chucNang.capNhat(khachHang);
    }
  }
});

document.getElementById("timKiem").addEventListener("keyup", () => {
  chucNang.timKiemDoiTuong();
});
document.getElementById("sortDoiTuong").addEventListener("change", () => {
  let doiTuongCanSort = document.getElementById("sortDoiTuong").value;
  chucNang.sortDoiTuong(doiTuongCanSort);
});

window.chinhSua = (ma) => {
  chucNang.chinhSua(ma);
};
window.xoa = (ma) => {
  chucNang.xoa(ma);
};
window.checkMa = (id, thongBao) => {
  checkInput.checkMa(id, thongBao);
};
window.checkTen = (id, thongBao) => {
  checkInput.checkTen(id, thongBao);
};
window.checkEmail = (id, thongBao) => {
  checkInput.checkEmail(id, thongBao);
};
window.checkDiaChi = (id, thongBao) => {
  checkInput.checkDiaChi(id, thongBao);
};
window.checkDoiTuong = (id, thongBao) => {
  checkInput.checkMa(id, thongBao);
};
window.checkDiem = (id, thongBao) => {
  checkInput.checkDiem(id, thongBao);
};
window.checkSoNgayLam = (id, thongBao) => {
  checkInput.checkSoNgayLam(id, thongBao);
};
window.checkTienLuong = (id, thongBao) => {
  checkInput.checkTienLuong(id, thongBao);
};
