const request = (callBack) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callBack);
  });
};

const nextTick = (callBack) => {
  if (callBack && typeof callBack === "function") {
    request(callBack);
  } else {
    return new Promise((resolve) => {
      request(resolve);
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
