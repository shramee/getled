if (!WOOSVIADM) {
    var WOOSVIADM = {}
} else {
    if (WOOSVIADM && typeof WOOSVIADM !== "object") {
        throw new Error("WOOSVIADM is not an Object type")
    }
}
WOOSVIADM.isLoaded = false;
WOOSVIADM.STARTS = function ($) {
    return{NAME: "Application initialize module", VERSION: 1.0, init: function () {
            if ($('body').hasClass('woocommerce_page_woocommerce_svi')) {
                this.loadInits();
            }
            this.notices();
        },
        loadInits: function () {
            $('input#columns').attr('type', 'number').attr('min', 1).attr('max', 10);
            $('input#lens_size').attr('type', 'number').attr('min', 100).attr('max', 300);

            $('input#lightbox_width').attr('type', 'number').attr('min', 10).attr('max', 90);
            $('input#lightbox_height').attr('type', 'number').attr('min', 100).attr('max', 1000);

        },
        notices: function () {
            jQuery(document).on('click', '.woosvi-notice-dismissed .notice-dismiss', function () {

                jQuery.ajax({
                    url: ajaxurl,
                    data: {
                        action: 'woosvi_dismiss_notice'
                    }
                })

            })
        }

    }
}(jQuery);
jQuery(document).ready(function () {
    WOOSVIADM.STARTS.init();
});
