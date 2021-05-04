export default {
  defaultTheme: `purple`,
  activeTheme: `purple`,
  bodyClass: document.body.classList,
  setTheme(theme) {
    this.bodyClass.remove(this.activeTheme);
    this.activeTheme = theme;
    this.bodyClass.add(this.activeTheme);
  },
  setDefaultTheme() {
    this.bodyClass.remove(this.activeTheme);
    this.bodyClass.add(this.defaultTheme);
  },
  setActiveTheme() {
    this.bodyClass.remove(this.defaultTheme);
    this.bodyClass.add(this.activeTheme);
  }
};
