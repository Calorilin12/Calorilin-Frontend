/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/

export const login = (token, id) => {
    console.log(token);
    console.log(id);
    localStorage.setItem("TOKEN", token);
    localStorage.setItem("ID", id);
};

export const logout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("ID");
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

export const getID = () => {
    return localStorage.getItem("ID");
};