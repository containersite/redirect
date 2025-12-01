<script type="application/javascript">
(function () {

    function randStr(e, t) {
        for (var n = "", r = t || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", o = 0; o < e; o++)
            n += r.charAt(Math.floor(Math.random() * r.length));
        return n;
    }

    function generateContent() {
        if (generateContent.val === undefined) {
            generateContent.val = "document.dispatchEvent(" + randStr(4 * Math.random() + 3) + ");";
        }
        return generateContent.val;
    }

    try {
        Object.defineProperty(document.currentScript, "innerHTML", { get: generateContent });
        Object.defineProperty(document.currentScript, "textContent", { get: generateContent });
    } catch (e) { }

    // version 7.0.0

    var adConfig = {
        ads_host: "a.pemsrv.com",
        syndication_host: "s.pemsrv.com",
        idzone: 5787148,
        popup_fallback: false,
        popup_force: false,
        chrome_enabled: true,
        new_tab: false,
        frequency_period: 720,
        frequency_count: 1,
        trigger_method: 3,
        trigger_class: "",
        trigger_delay: 0,
        capping_enabled: true,
        tcf_enabled: true,
        only_inline: false
    };

    // Polyfill for querySelectorAll on older browsers
    if (!window.document.querySelectorAll) {
        document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function (selector) {
            var r = document,
                sheet = r.createStyleSheet(),
                all = r.all,
                result = [];

            var selectors = selector.replace(/\[for\b/gi, "[htmlFor").split(",");

            for (var i = selectors.length; i--;) {
                sheet.addRule(selectors[i], "k:v");
                for (var j = all.length; j--;) {
                    if (all[j].currentStyle.k) result.push(all[j]);
                }
                sheet.removeRule(0);
            }

            return result;
        };
    }

    var popMagic = {
        version: 7,
        cookie_name: "",
        url: "",
        config: {},
        open_count: 0,
        top: null,
        browser: null,
        venor_loaded: false,
        venor: false,
        tcfData: null,

        configTpl: {
            ads_host: "",
            syndication_host: "",
            idzone: "",
            frequency_period: 720,
            frequency_count: 1,
            trigger_method: 1,
            trigger_class: "",
            popup_force: false,
            popup_fallback: false,
            chrome_enabled: true,
            new_tab: false,
            cat: "",
            tags: "",
            el: "",
            sub: "",
            sub2: "",
            sub3: "",
            only_inline: false,
            trigger_delay: 0,
            capping_enabled: true,
            tcf_enabled: false,
            cookieconsent: true,
            should_fire: function () { return true; },
            on_redirect: null
        },

        init: function (cfg) {
            if (cfg.idzone !== undefined && cfg.idzone) {
                if (cfg.customTargeting === undefined)
                    cfg.customTargeting = [];

                window.customTargeting = cfg.customTargeting || null;

                var extKeys = Object.keys(cfg.customTargeting)
                    .filter(k => k.search("ex_") >= 0);

                if (extKeys.length) {
                    extKeys.forEach(function (key) {
                        this.configTpl[key] = null;
                    }.bind(this));
                }

                for (var k in this.configTpl) {
                    if (this.configTpl.hasOwnProperty(k)) {
                        this.config[k] = (cfg[k] !== undefined ? cfg[k] : this.configTpl[k]);
                    }
                }

                if (this.config.idzone !== undefined && this.config.idzone !== "") {
                    if (!this.config.only_inline) this.loadHosted();

                    var self = this;

                    this.checkTCFConsent(function () {
                        if (document.readyState === "complete") self.preparePopWait();
                        else self.addEventToElement(window, "load", self.preparePop);
                    });
                }
            }
        },

        /** Cookie and frequency control **/
        getCountFromCookie: function () {
            if (!this.config.cookieconsent) return 0;
            var val = popMagic.getCookie(popMagic.cookie_name);
            var count = val === undefined ? 0 : parseInt(val);
            return isNaN(count) ? 0 : count;
        },

        getLastOpenedTimeFromCookie: function () {
            var val = popMagic.getCookie(popMagic.cookie_name);
            var last = null;

            if (val !== undefined) {
                var parts = val.split(";")[1];
                last = parts > 0 ? parseInt(parts) : 0;
            }

            return isNaN(last) ? null : last;
        },

        shouldShow: function (forced) {
            forced = forced || false;

            if (!popMagic.config.capping_enabled) {
                var allowed = true;
                var check = popMagic.config.should_fire;

                try {
                    if (!forced && typeof check === "function")
                        allowed = Boolean(check());
                } catch (e) {
                    console.error("Error executing should_fire callback:", e);
                }

                return allowed && popMagic.open_count === 0;
            }

            if (popMagic.open_count >= popMagic.config.frequency_count) return false;

            var count = popMagic.getCountFromCookie(),
                last = popMagic.getLastOpenedTimeFromCookie(),
                now = Math.floor(Date.now() / 1000),
                wait = last + popMagic.config.trigger_delay;

            if (last && wait > now) return false;

            popMagic.open_count = count;
            return !(count >= popMagic.config.frequency_count);
        },

        /** … (Truncated here for brevity) … **/
        /** Full beautified script continues exactly like above,
            only formatted and not logically modified. **/

    };

    popMagic.init(adConfig);

})();
</script>
