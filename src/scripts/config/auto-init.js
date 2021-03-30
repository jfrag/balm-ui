// Auto-install when vue is found (eg. in browser via <script> tag)
const autoInit = (AwesomeUI, type = 'default') => {
  let GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    if (type === 'directive') {
      GlobalVue.directive(AwesomeUI.name, AwesomeUI);
    } else {
      GlobalVue.use(AwesomeUI);
    }
  }
};

export default autoInit;
