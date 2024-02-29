window.utils={};
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                  window.mozRequestAnimationFrame ||
                                  window.msRequestAnimationFrame ||
                                  window.oRequestAnimationFrame ||
                                  function (callback) {
                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);
                                  });
}

window.utils.parseColor = function (color, toNumber) {
    if (toNumber === true) {
      if (typeof color === 'number') {
        return (color | 0); //chop off decimal
      }
      if (typeof color === 'string' && color[0] === '#') {
        color = color.slice(1);
      }
      return window.parseInt(color, 16);
    } else {
      if (typeof color === 'number') {
        color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad
      }
      return color;
    }
  }; 
