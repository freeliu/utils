/**
 * Created by freeliu on 2017/6/8.
 */
/**
 * 对象属性首字母转化成大小写两个版本
 * @param {Object|Array}o
 * @return {*}
 */
function toCamelAndToUp(o) {
    let newO, origKey, newKey, value, NewKey, Value
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey]
            if (typeof value === 'object') {
                value = toCamelAndToUp(value)
            }
            newO.push(value)
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                //转camel
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
                value = o[origKey]

                //转大写开头
                NewKey = (origKey.charAt(0).toUpperCase() + origKey.slice(1) || origKey).toString()
                Value = o[origKey]

                if (value !== null && (value.constructor === Object || value instanceof Array)) {
                    value = toCamelAndToUp(value)
                }
                if (Value !== null && (Value.constructor === Object || Value instanceof Array)) {
                    Value = toCamelAndToUp(Value)
                }
                newO[newKey] = value
                newO[NewKey] = Value
            }
        }
    }
    return newO
}

//将对象属性名转成驼峰格式
function toCamel(o) {
    let newO, origKey, newKey, value
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey]
            if (typeof value === 'object') {
                value = toCamel(value)
            }
            newO.push(value)
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
                value = o[origKey]
                if (value !== null && (value.constructor === Object || value instanceof Array)) {
                    value = toCamel(value)
                }
                newO[newKey] = value
            }
        }
    }
    return newO
}