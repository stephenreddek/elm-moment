var _stephenreddek$elm_moment$Native_Moment = function(Moment){
    function getCurrent(){
        return Moment().toObject();
    }

    function format(moment) {
        return Moment(moment).format().toObject();
    }

    function formatString(formatString, moment) {
        if (typeof formatString === "undefined" || formatString === null){
            return Moment(moment).format();
        }
        return Moment(moment).format(formatString);
    }

    function add(first, second){
        var m = Moment(first);
        m.add(second);

        return m.toObject();
    }

    function subtract(first, second){
        var m = Moment(first);
        m.subtract(second);

        return m.toObject();
    }

    function from(first, second){
        var m = Moment(first);
        return m.from(Moment(second));
    }

    function isBefore(first, second) {
        var m = Moment(first);
        return m.isBefore(Moment(second));
    }

    function isAfter(first, second){
        var m = Moment(first);
        return m.isAfter(Moment(second));
    }

    return {
        getCurrent: getCurrent,
        format: format,
        formatString: F2(formatString),
        add: F2(add),
        subtract: F2(subtract),
        from: F2(from),
        isBefore: F2(isBefore),
        isAfter: F2(isAfter)
    };

}(require('./momentJS.js'));
