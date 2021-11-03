/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
        restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Pengguna from "pages/Data-Pengguna";
import Jadwal from "pages/Jadwal-Makan";
import Kalori from "pages/Kalori-Makanan";
import Resep from "pages/Resep-Makanan";
import TambahResep from "pages/Tambah-Resep-Makanan";
import LihatResep from "pages/Lihat-Resep-Makanan";
import EditResep from "pages/Edit-Resep-Makanan";
import LihatJadwal from "pages/Lihat-Jadwal";
import LihatPengguna from "pages/Lihat-Pengguna";
import LihatKalori from "pages/Lihat-Kalori";

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/",
    exact: true,
    component: Login,
    restricted: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    private: true,
  },
  {
    name: "Data Pengguna",
    path: "/data-pengguna",
    exact: true,
    component: Pengguna,
    private: true,
  },
  {
    name: "Jadwal Makan",
    path: "/jadwal-makan",
    exact: true,
    component: Jadwal,
    private: true,
  },
  {
    name: "Kalori Makanan",
    path: "/kalori-makanan",
    exact: true,
    component: Kalori,
    private: true,
  },
  {
    name: "Resep Makanan",
    path: "/resep-makanan",
    exact: true,
    component: Resep,
    private: true,
  },
  {
    name: "Tambah Resep Makanan",
    path: "/tambah-resep-makanan",
    exact: true,
    component: TambahResep,
    private: true,
  },
  {
    name: "Lihat Resep Makanan",
    path: "/lihat-resep-makanan",
    exact: true,
    component: LihatResep,
    private: true,
  },
  {
    name: "Edit Resep Makanan",
    path: "/edit-resep-makanan",
    exact: true,
    component: EditResep,
    private: true,
  },
  {
    name: "Lihat Jadwal",
    path: "/lihat-jadwal",
    exact: true,
    component: LihatJadwal,
    private: true,
  },
  {
    name: "Lihat Pengguna",
    path: "/lihat-pengguna",
    exact: true,
    component: LihatPengguna,
    private: true,
  },
  {
    name: "Lihat Kalori",
    path: "/lihat-kalori",
    exact: true,
    component: LihatKalori,
    private: true,
  },
];