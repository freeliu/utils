/**
 * Created by freeliu on 2017/6/8.
 */

//获取字符串占用空间
String.prototype.getWidth = function (fontSize) {
    if (!isNaN(fontSize)) {
        fontSize = fontSize + 'px'
    }
    o = $('<div>' + this + '</div>')
        .css({
            'position': 'absolute',
            'float': 'left',
            'white-space': 'nowrap',
            'visibility': 'hidden',
            'font-size': fontSize
        })
        .appendTo($('body')),
        w = o.width();
    o.remove();
    return w;
};