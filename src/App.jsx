import React from "react";

import BoKhungChinh from "./layouts/BoKhungChinh";
import TheThongKe from "./components/TheThongKe";
import BangKhoaHoc from "./components/BangKhoaHoc";

function App() {
  return (
    <BoKhungChinh>
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Bảng điều khiển tổng quan
        </h2>

        <p className="text-gray-500">
          Chào mừng bạn quay trở lại hệ thống quản trị bài-tập-2.
        </p>
      </div>

      {/* Grid thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <TheThongKe
          tieuDe="Tổng sinh viên"
          conSo="1,250"
          mauSac="text-blue-600"
        />

        <TheThongKe
          tieuDe="Khóa học đang mở"
          conSo="24"
          mauSac="text-green-600"
        />

        <TheThongKe
          tieuDe="Dự án hoàn thành"
          conSo="412"
          mauSac="text-purple-600"
        />

      </div>

      {/* Danh sách môn học */}
      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">
            Danh sách môn học mới nhất
          </h3>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
            + Thêm môn học
          </button>
        </div>

        <BangKhoaHoc />

      </div>

    </BoKhungChinh>
  );
}

export default App;