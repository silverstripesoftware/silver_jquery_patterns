(function($) {
    $.Decorator = function(decorator, obj_to_decorate) {
        decorator.instance = obj_to_decorate;
        var dispatch = function(instance, method) {
        return function() { return instance[method].apply(instance, arguments); };
        };
        for(var method in obj_to_decorate) {
        if (!decorator[method]) {
            if(jQuery.isFunction(obj_to_decorate[method])) {
                decorator[method] = dispatch(obj_to_decorate, method);
            }
        }
        }
    }
})(jQuery);