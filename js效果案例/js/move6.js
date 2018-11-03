function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
function startMove(obj, json, func) {
    clearInterval(obj.timer);
    var speed, cur, stop;
    obj.timer = setInterval(function () {
        for (var attr in json) {
            stop = true;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, 'opacity')) * 100);
                speed = (json[attr] - cur) / 17;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur != json[attr]) {
                    stop = false;
                    obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                    obj.style.opacity = (cur + speed) / 100;
                }
            } else {
                cur = parseInt(getStyle(obj, attr));
                speed = (json[attr] - cur) / 20;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur != json[attr]) {
                    stop = false;
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }
        if (stop) {
            clearInterval(obj.timer);
            if (func)func.call(obj)
        }
    }, 30);
}
