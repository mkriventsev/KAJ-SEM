export const initLocalStorage = () => {
  if (localStorage.getItem("levelstat") === null) {
    const levelstat = { s10: {}, s15: {}, s20: {} };
    localStorage.setItem("levelstat", JSON.stringify(levelstat));
  }
  if (localStorage.getItem("settings") === null) {
    const settings = {
      music: { state: true, level: 50 },
      sound: { state: true, level: 50 },
    };
    localStorage.setItem("settings", JSON.stringify(settings));
  }
  if (localStorage.getItem("meta") === null) {
    localStorage.setItem("last_init", Date.now());
  }
};