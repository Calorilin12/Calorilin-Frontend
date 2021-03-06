/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
        restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import Profile from "pages/Profile-Admin";
import UbahKataSandi from "pages/Setting-Admin";
import Pengguna from "pages/Data-Pengguna";
import Jadwal from "pages/Jadwal-Makan";
import Kalori from "pages/Kalori-Makanan";
import Resep from "pages/Resep-Makanan";
import TambahResep from "pages/Tambah-Resep-Makanan";
import TambahKalori from "pages/Tambah-Kalori-Makanan";
import LihatResep from "pages/Lihat-Resep-Makanan";
import EditResep from "pages/Edit-Resep-Makanan";
import EditKalori from "pages/Edit-Kalori-Makanan";
import LihatJadwal from "pages/Lihat-Jadwal";
import LihatPengguna from "pages/Lihat-Pengguna";
import LihatKalori from "pages/Lihat-Kalori-Makanan";
import Artikel from "pages/Artikel";
import TambahArtikel from "pages/Tambah-Artikel";
import LihatArtikel from "pages/Lihat-Artikel";
import EditArtikel from "pages/Edit-Artikel";

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
    name: "Profile Admin",
    path: "/profile-admin/:id",
    exact: true,
    component: Profile,
    private: true,
  },
  {
    name: "Setting Profile Admin",
    path: "/ubah-kata-sandi/:id",
    exact: true,
    component: UbahKataSandi,
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
    name: "Lihat Pengguna",
    path: "/lihat-pengguna/:id",
    exact: true,
    component: LihatPengguna,
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
    name: "Lihat Jadwal",
    path: "/lihat-jadwal/:id",
    exact: true,
    component: LihatJadwal,
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
    name: "Tambah Kalori Bahan Makanan",
    path: "/tambah-kalori-makanan",
    exact: true,
    component: TambahKalori,
    private: true,
  },
  {
    name: "Lihat Kalori",
    path: "/lihat-kalori-makanan/:id",
    exact: true,
    component: LihatKalori,
    private: true,
  },
  {
    name: "Edit Kalori Makanan",
    path: "/edit-kalori-makanan/:id",
    exact: true,
    component: EditKalori,
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
    path: "/lihat-resep-makanan/:id",
    exact: true,
    component: LihatResep,
    private: true,
  },
  {
    name: "Edit Resep Makanan",
    path: "/edit-resep-makanan/:id",
    exact: true,
    component: EditResep,
    private: true,
  },
  {
    name: "Artikel",
    path: "/artikel",
    exact: true,
    component: Artikel,
    private: true,
  },
  {
    name: "Tambah Artikel",
    path: "/tambah-artikel",
    exact: true,
    component: TambahArtikel,
    private: true,
  },
  {
    name: "Lihat Artikel",
    path: "/lihat-artikel/:id",
    exact: true,
    component: LihatArtikel,
    private: true,
  },
  {
    name: "Edit Artikel",
    path: "/edit-artikel/:id",
    exact: true,
    component: EditArtikel,
    private: true,
  },
];