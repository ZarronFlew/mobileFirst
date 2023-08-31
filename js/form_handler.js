!function(e){"use strict";e.fn.formHandler=function(a){if(!this.length)return!1;e(this).attr("novalidate","novalidate");a=e.extend({},{errorModal:!0,autoFillFormElement:!1,countryDropdown:"Select Country",ajaxLoader:{div:"",timeInOut:0},responseLoader:{div:"",timeInOut:0}},a);var t=e(this);if(t.find("input[name=shippingState]").change((function(a){e("body").data({chromeAutofilled:e(this).val()}),c("shippingState","shippingCountry")})),a.autoFillFormElement){var n=e("form[name="+a.autoFillFormElement+"]");t.find("input[type=text]").on("keyup",(function(){var a=e(this).attr("name");n.find("input[name="+a+"]").val(e(this).val())})),t.find("textarea").on("keyup",(function(){var a=e(this).attr("name");n.find("textarea[name="+a+"]").val(e(this).val())}))}function i(e){if(e.removeClass(cb.errorClass).removeClass(cb.validClass),e.val().length){e.addClass(cb.errorClass);var a=e.val().trim();if(""!==a){var t=1,n=100;void 0!==e.data("min-length")&&(t=parseInt(e.data("min-length"))),void 0!==e.data("max-length")&&(n=parseInt(e.data("max-length"))),a.length<t||a.length>n||e.removeClass(cb.errorClass).addClass(cb.validClass)}}}function r(a){"show"==a?(e(".sepa-block,.sepa-block p").show(),e("[name=sepa_iban],[name=sepa_bic],[name=pin_number]").attr("disabled",!1),e("[name=sepa_iban],[name=sepa_bic],[name=pin_number]").addClass("required")):(e(".sepa-block,.sepa-block p").hide(),e("[name=sepa_iban],[name=sepa_bic],[name=pin_number]").attr("disabled",!0),e("[name=sepa_iban],[name=sepa_bic],[name=pin_number]").removeClass("required"))}function s(a){"show"==a?(e(".directdebit-block,.directdebit-block p").show(),e("[name=iban],[name=ddbic]").attr("disabled",!1),e("[name=iban],[name=ddbic]").addClass("required")):(e(".directdebit-block,.directdebit-block p").hide(),e("[name=iban],[name=ddbic]").attr("disabled",!0),e("[name=iban],[name=ddbic]").removeClass("required"))}function l(a){"show"==a?e(".squareForm").show():e(".squareForm").hide()}function o(n,i){var r=t.find("select[name="+n+"]"),s=r.data("selected"),l="",o=0;e.each(app_config.allowed_country_codes,(function(e,a){app_config.countries.hasOwnProperty(a)&&(o++,l+='<option value="'+a+'">'+app_config.countries[a].name+"</option>")})),1!=o&&(l='<option value="">'+a.countryDropdown+"</option>"+l),r.html(l).trigger("change"),void 0!==s&&s.length&&r.val(s).trigger("change"),c(i,n)}function c(a,n){var i=t.find("input[name="+a+"]"),r=i.data("selected"),s=(e("body").data("chromeAutofilled")&&e("body").data("chromeAutofilled"),t.find("select[name="+n+"]"));if(0!==s.length&&""!==e(s).val()){var l="",o=n.replace("Country","")+"Zip";if(app_config.country_lang_mapping.hasOwnProperty(s.val())?(t.find("[name="+a+"]").closest("p, div, tr").find("label").text(app_config.country_lang_mapping[s.val()].state),t.find("[name="+o+"]").closest("p, div, tr").find("label").text(app_config.country_lang_mapping[s.val()].zip)):(t.find("[name="+a+"]").closest("p, div, tr").find("label").text("State: "),t.find("[name="+o+"]").closest("p, div, tr").find("label").text("Zip: ")),e.each(app_config.countries[s.val()].states,(function(e,a){e.length&&"US"==s.val()&&null!=e.match(/Armed Forces/)||(l+='<option value="'+e+'">'+a.name+"</option>")})),l.length){if(!t.find("select[name="+a+"]").length){i.attr("class");e('<select name="'+a+'"/>').insertAfter(i);var c=i.get(0).attributes;i.remove(),d(t.find("select[name="+a+"]"),c)}var m="State";if(void 0!==app_config.country_lang_mapping[s.val()]&&void 0!==app_config.country_lang_mapping[s.val()].state&&""!=app_config.country_lang_mapping[s.val()].state){var p=app_config.country_lang_mapping[s.val()].state;m=":"==p[p.length-1]?app_config.country_lang_mapping[s.val()].state.slice(0,-1):app_config.country_lang_mapping[s.val()].state}var f="<option value='' selected='selected'>Select "+m+"</option>";t.find("select[name="+a+"]").html(f+l),r&&t.find("select[name="+a+"]").val(r)}else{if(0===t.find("input[name="+a+"]").length){(i=t.find("select[name="+a+"]")).attr("class");e('<input type="text" name="'+a+'" readonly />').insertAfter(i);c=i.get(0).attributes;i.remove(),d(t.find("input[name="+a+"]"),c)}t.find("input[name="+a+"]").removeAttr("readonly")}}}function d(e,a){for(var t in a)"object"==typeof a[t]&&e.attr(a[t].name,a[t].value)}t.on("focus","input, select",(function(){"inline"===app_config.show_validation_errors&&e(this).next(".cb-inline-error").remove()})),t.on("blur","input, select",(function(){e(this).hasClass("required")&&i(e(this))})),t.on("change","input, select",(function(){e(this).hasClass("required")&&i(e(this))})),e(document).on("change","select[name$=Country]",(function(){if(e("[name=email]").length&&e("[name=creditCardNumber]").length){var a=e(this).attr("name");"shippingCountry"==a?(cb.formElementSelectors.country="[name="+a+"]",cb.formElementSelectors.zip="[name=shippingZip]"):(cb.formElementSelectors.country="[name="+a+"]",cb.formElementSelectors.zip="[name=billingZip]")}})),t.find(cb.formElementSelectors.zip).blur((function(){if(e(this).hasClass("required")&&!e(this).attr("data-ignore")&&(e(this).removeClass(cb.errorClass).removeClass(cb.validClass),e(this).val().length)){var a=t.find(cb.formElementSelectors.country).val();void 0===a&&(a="default"),validator.isValidZip(e(this).val(),a)?e(this).addClass(cb.validClass):e(this).addClass(cb.errorClass)}})),t.find(cb.formElementSelectors.email).blur((function(){e(this).hasClass("required")&&(e(this).removeClass(cb.errorClass).removeClass(cb.validClass),e(this).val().length&&(validator.isValidEmail(e(this).val())?e(this).addClass(cb.validClass):e(this).removeClass(cb.validClass).addClass(cb.errorClass)))})),t.find(cb.formElementSelectors.phone).blur((function(){e(this).hasClass("required")&&(e(this).removeClass(cb.errorClass).removeClass(cb.validClass),e(this).val().length&&(i(e(this)),e(this).hasClass(cb.errorClass)||(validator.isValidPhone(e(this).val())?e(this).addClass(cb.validClass):e(this).removeClass(cb.validClass).addClass(cb.errorClass))))})),t.find(cb.formElementSelectors.cardNumber).blur((function(a){if(e(this).hasClass("required")){e(this).removeClass(cb.errorClass).removeClass(cb.validClass);var n=t.find(cb.formElementSelectors.cardNumber),i=t.find(cb.formElementSelectors.cardType).val(),r=n.val();if(r.length){var s=r.trim().replace(/[\s-]/g,"");if(void 0!==app_config.allowed_tc&&app_config.allowed_tc.length){var l=cb.decryptAllowedTestCard(app_config.allowed_tc),o=!1;if(e(l).each((function(e,a){var t=a.toString().split("|")[0];if(s===t)return o=!0,!0})),o)return n.removeClass(cb.errorClass).addClass(cb.validClass),!0}n.removeClass(cb.validClass).addClass(cb.errorClass),validator.isValidCardNumber(s,i)&&i.length&&n.removeClass(cb.errorClass).addClass(cb.validClass)}}})),t.find(cb.formElementSelectors.cvv).blur((function(){e(this).hasClass("required")&&(e(this).removeClass(cb.errorClass).removeClass(cb.validClass),e(this).val().length&&(i(e(this)),e(this).hasClass(cb.errorClass)||(validator.isValidCvv(e(this).val())?e(this).addClass(cb.validClass):e(this).removeClass(cb.validClass).addClass(cb.errorClass))))})),t.find(cb.formElementSelectors.cvv).keyup((function(){e(this).val(e(this).val().replace(/[^\d]/g,""))})),"undefined"!==a.type&&"checkout"!=a.type&&(o("shippingCountry","shippingState"),t.find("select[name=shippingCountry]").change((function(){e(this).data("oldValue")!=e(this).val()&&(e(this).data({oldValue:e(this).val()}),c("shippingState","shippingCountry"))}))),t.find("input[name=creditCardNumber]").keyup((function(a){e(this).val(e(this).val().toString().replace(/[^0-9\s-]/g,""))})),t.find(cb.formElementSelectors.cardNumber).change((function(a){e(this).trigger("keydown").trigger("keypress").trigger("keyup")})),t.find("input[name=creditCardNumber]").keyup((function(){var a=t.find(cb.formElementSelectors.cardNumber),n=t.find(cb.formElementSelectors.cardType),i=a.val().trim().replace(/[\s-]/g,""),r=validator.getCardType(i);if(!1===r&&void 0!==app_config.allowed_tc&&app_config.allowed_tc.length){var s=cb.decryptAllowedTestCard(app_config.allowed_tc);e(s).each((function(e,a){var t=a.toString().split("|");if(i===t[0])return r=t[1],!0}))}n.find("option[value="+r+"]").length?(n.val(r).trigger("change"),n.removeClass(cb.errorClass).addClass(cb.validClass)):0!=t.find("select[name=creditCardType]").data("deselect")&&(n.val("").trigger("change"),n.addClass(cb.errorClass).removeClass(cb.validClass))})),t.find("select[name=creditCardType]").change((function(a){var n=e(this).val();!function(a){"amex"==a?e("[name=CVV]").attr("maxlength","4"):e("[name=CVV]").attr("maxlength","3")}(n),e.each(["creditCardNumber","expmonth","expyear","CVV"],(function(a,t){"paypal"==n||"COD"==n||"payu"==n||"sezzle"==n||"affirm"==n||"klarna"==n||"offline"==n||"afterpay"==n||"external"==n||"ccbill"==n||"applePay"==n?(e("[name="+t+"]").removeClass("required").closest("p, div").hide(),l("hide"),r("hide"),s("hide")):"sepa"==n?(e("[name="+t+"]").removeClass("required").closest("p, div").hide(),l("hide"),r("show"),s("hide")):"DIRECTDEBIT"==n?(e("[name="+t+"]").removeClass("required").closest("p, div").hide(),l("hide"),r("hide"),s("show")):"square"==n?(e("[name="+t+"]").removeClass("required").closest("p, div").hide(),l("show"),r("hide"),s("hide")):(e("[name="+t+"]").addClass("required").closest("p, div").show(),l("hide"),r("hide"),s("hide"))}));var i=validator.getCardNumberMaxLength(n);t.find("input[name=creditCardNumber]").attr("maxlength",i)})),t.find("input[name=billingSameAsShipping]").change((function(a){"no"==e(this).val()?(e(".billing-info").show(),o("billingCountry","billingState"),t.find("select[name=billingCountry]").change((function(){c("billingState","billingCountry")})),e(".billing-info input,.billing-info select").addClass("required")):(e(".billing-info input,.billing-info select").removeClass("required"),e(".billing-info input,.billing-info select").removeClass(cb.errorClass),e(".billing-info").hide())})),t.submit((function(n){n.preventDefault();var i=cb.validateForm(t,cb.formActions[a.type]);if("undefined"!==a.type&&"prospect"!=a.type&&"upsell"!=a.type&&(!function(){var e=new Date,a=e.getFullYear().toString().substr(2,2),n=e.getMonth()+1;if(t.find(cb.formElementSelectors.cardExpiryMonth).val().length&&t.find(cb.formElementSelectors.cardExpiryMonth).val()<n&&t.find(cb.formElementSelectors.cardExpiryYear).val().length&&t.find(cb.formElementSelectors.cardExpiryYear).val()<=a)return!0;return!1}()?function(){if(app_config.disable_trialoffer_cardexp)return!0;var e=t.find("select[name=expmonth]"),a=t.find("select[name=expyear]"),n=parseInt(e.val()),i=parseInt(a.val());if((new Date).setFullYear("20"+i,n-3)-new Date<1)return!1;return!0}()||(i.cardNumber=app_lang.error_messages.card_expire_soon,t.find(cb.formElementSelectors.cardNumber).addClass(cb.errorClass)):(i.cardNumber=app_lang.error_messages.card_expired,t.find(cb.formElementSelectors.cardNumber).addClass(cb.errorClass))),t.find(".agree-checkbox").length&&(t.find(".agree-checkbox").prop("checked")||(void 0!==t.find(".agree-checkbox").data("error-message")?i.agreeCheckbox=t.find(".agree-checkbox").data("error-message"):i.agreeCheckbox=app_lang.error_messages.not_checked)),0===Object.keys(i).length){if(t.find('input[name="user_is_at"]').remove(),t.append('<input type="hidden" name="user_is_at" value="'+location.href+'" />'),cb.currentFormSubmitEvents=[],Array.isArray(cb.beforeFormSubmitEvents))for(var r=0,s=cb.beforeFormSubmitEvents.length;r<s;r++)"function"==typeof cb.beforeFormSubmitEvents[r]&&cb.currentFormSubmitEvents.push(cb.beforeFormSubmitEvents[r]);cb.submitForm(t,a)}else cb.errorHandler(function(a){var n={};return t.find("input, select").each((function(){a.hasOwnProperty(e(this).attr("name"))&&(n[e(this).attr("name")]=a[e(this).attr("name")],delete a[e(this).attr("name")])})),e.each(a,(function(e,a){n[e]=a})),n}(i),t)}))}}(jQuery);var FwUtils={log:function(){"Y"==app_config.dev_mode&&console.log(arguments)}};