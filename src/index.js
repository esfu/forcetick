const doubleRequestAnimationFrame = (callBack) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callBack);
  });
};

const nextTick = (callBack) => {
  if (callBack && typeof callBack === "function") {
    doubleRequestAnimationFrame(callBack);
  } else {
    return new Promise((resolve) => {
      doubleRequestAnimationFrame(resolve);
    });
  }
};

const forceTick = {
  install(Vue) {
    Vue.$forceTick = nextTick;
    Vue.prototype.$forceTick = nextTick;
  },
};

export default forceTick;
