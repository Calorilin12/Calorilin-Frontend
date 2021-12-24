/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/

export const login = (token) => {
    console.log(token);
    localStorage.setItem("TOKEN", token);
};

export const logout = () => {
    localStorage.removeItem("TOKEN");
};

export const isLogin = () => {
    if (localStorage.getItem("TOKEN")) {
        return true;
    }
    return false;
};

export const getToken = () => {
    return localStorage.getItem("TOKEN");
};