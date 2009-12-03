(function($) {
    $.Observer = {
        addSubscriber: function(callback) {
            this.subscribers[this.subscribers.length] = callback;
        },

        removeSubscriber: function(callback) {
            for(var i=0; i<this.subscribers.length; i++) {
                if (this.subscribers[i] == callback) {
                    delete(this.subscribers[i]);
                }
            }
        },

        notify: function(what) {
            for(var i=0; i<this.subscribers.length; i++) {
                this.subscribers[i][this.observerMethod](what);
            }
        },

        mixin: function(obj, callbackMethod) {
            for(var i in this) {
                obj[i] = this[i];
                obj.subscribers = [];
                obj.observerMethod = callbackMethod;
            }
        }
    }
})(jQuery);