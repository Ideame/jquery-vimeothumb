/*!
 * jQuery VimeoThumb
 * Automatically replace image src with vimeo thumbnail url.
 * Original author: Juan Pablo Garcia
 * version: 1.0.0 (Wed, 14 Aug 2013)
 * Further changes, comments: @jpgd
 * Source Code: https://github.com/Ideame/jquery-vimeothumb
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {
    var pluginName = "VimeoThumb",
        defaults = {
            idSelectorName: 'data-vimeo-id',
            vimeoPatternUrl: 'http://vimeo.com/api/v2/video/%id.json?callback=?'
        };

    function Plugin( elements, options ) {
        this.elements = elements;
        this.options = $.extend( {}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var options = this.options;

            $(this.elements).each(function (i, e) {
                var id = $(e).attr(options.idSelectorName);

                if (id && !/VIMEO/i.test($(e).attr('src'))) {
                    var url = options.vimeoPatternUrl.replace(/%id/, id);

                    $.getJSON(url, function (data) {
                        if (data[0]) {
                            if ($(e).hasClass('large')) {
                                $(e).attr('src', data[0].thumbnail_large);
                            } else if ($(e).hasClass('small')) {
                                $(e).attr('src', data[0].thumbnail_small);
                            } else {
                                $(e).attr('src', data[0].thumbnail_medium);
                            }
                        }
                    });
                }
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
