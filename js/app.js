!function(e){e((function(){e("form[name=prospect_form1]").formHandler({type:"prospect",errorModal:!0,autoFillFormElement:"prospect_form2",countryDropdown:"Select Country",ajaxLoader:{div:"#loading-indicator",timeInOut:0}}),e("form[name=prospect_form2]").formHandler({type:"prospect",errorModal:!0,autoFillFormElement:"prospect_form1",countryDropdown:"Select Country",ajaxLoader:{div:"#loading-indicator",timeInOut:0}}),e("form[name=checkout_form]").formHandler({type:"checkout",errorModal:!0,countryDropdown:"Select Country",ajaxLoader:{div:"#loading-indicator",timeInOut:0}}),e("form[name=downsell_form1]").formHandler({type:"downsell1",errorModal:!0,countryDropdown:"Select Country",ajaxLoader:{div:"#loading-indicator",timeInOut:0}}),e("form[name=downsell_form2]").formHandler({type:"downsell2",errorModal:!0,countryDropdown:"Select Country",ajaxLoader:{div:"#loading-indicator",timeInOut:0}}),e("form[name=is-upsell]").formHandler({type:"upsell",errorModal:!0,ajaxLoader:{div:"#loading-indicator",timeInOut:0}});var o=!1;e(document).off("keypress keydown keyup","input, button, a"),e(document).on("keypress keydown keyup","input, button, a",(function(t){if(("13"==t.which||"32"==t.which)&&(e("#loading-indicator").is(":visible")||o))return t.preventDefault(),o=!0,!1})),e(document).off("click","#app_common_modal_close"),e(document).on("click","#app_common_modal_close",(function(o){o.preventDefault?o.preventDefault():o.returnValue=!1,e("#app_common_modal").remove()}));var t=queryString();null!=t&&void 0!==t.asyncp&&"y"==t.asyncp&&asyncProspect(),"leadPage"==app_config.pageType&&getClientId(),addCsrfTokenToForm()})),app_config.hasOwnProperty("allowed_tc")&&("string"==typeof app_config.allowed_tc||app_config.allowed_tc),"undefined"!=typeof disableUrlErrorHandler&&!0===disableUrlErrorHandler||cb.urlErrorHandler()}(jQuery);var cSpeed=9,cWidth=128,cHeight=128,cTotalFrames=18,cFrameWidth=128,cImageSrc=app_config.offer_path+"assets/images/sprites.gif",cImageTimeout=!1,cIndex=0,cXpos=0,cPreloaderTimeout=!1,SECONDS_BETWEEN_FRAMES=0;function startAnimation(){document.getElementById("loaderImage").style.backgroundImage="url("+cImageSrc+")",document.getElementById("loaderImage").style.width=cWidth+"px",document.getElementById("loaderImage").style.height=cHeight+"px",FPS=Math.round(100/cSpeed),SECONDS_BETWEEN_FRAMES=1/FPS,cPreloaderTimeout=setTimeout("continueAnimation()",SECONDS_BETWEEN_FRAMES/1e3)}function continueAnimation(){cXpos+=cFrameWidth,(cIndex+=1)>=cTotalFrames&&(cXpos=0,cIndex=0),document.getElementById("loaderImage")&&(document.getElementById("loaderImage").style.backgroundPosition=-cXpos+"px 0"),cPreloaderTimeout=setTimeout("continueAnimation()",1e3*SECONDS_BETWEEN_FRAMES)}function stopAnimation(){clearTimeout(cPreloaderTimeout),cPreloaderTimeout=!1}function imageLoader(e,o){clearTimeout(cImageTimeout),cImageTimeout=0,genImage=new Image,genImage.onload=function(){cImageTimeout=setTimeout(o,0)},g,genImage.src=e}function openNewWindow(e,o,t,n,a,r,i,c){if(o||(o="popup"),n||(n=480),a||(a=480),r||(r=50),i||(i=50),c||(c="resizable,scrollbars"),"popup"==o){var d="height="+a+",";d+="width="+n+",",d+="top="+r+",",d+="left="+i+",",d+=c,win=window.open(e,t,d),win.window.focus()}else if("modal"==o){var l="";l+='<div id="app_common_modal">',l+='<div class="app_modal_body"><a href="javascript:void(0);" id="app_common_modal_close">X</a><iframe src="'+e+'" frameborder="0"></iframe></div>',l+="</div>",$("#app_common_modal").length||$("body").append(l),$("#app_common_modal").fadeIn()}}function openWindow(e,o,t,n){return e.preventDefault?e.preventDefault():e.returnValue=!1,openNewWindow(o,t,n)}function queryString(){for(var e={},o=window.location.search.substring(1).split("&"),t=0;t<o.length;t++){var n=o[t].split("=");if(void 0===e[n[0]])e[n[0]]=decodeURIComponent(n[1]);else if("string"==typeof e[n[0]]){var a=[e[n[0]],decodeURIComponent(n[1])];e[n[0]]=a}else e[n[0]].push(decodeURIComponent(n[1]))}return e}function asyncProspect(){$.ajax({url:"ajax.php?method=async_prospect",method:"post",data:{},success:function(e){"object"==typeof e&&void 0!==e.context&&0==e.context.errorFound&&e.context.prospectId?$("input[name=prospectId]").length&&$("input[name=prospectId]").val(e.context.prospectId):$("form[name=checkout_form]").append('<input type="hidden" name="altered_action" value="new_order" />')}})}var AppHelpers={delay:3e4,delayOrderProcessing:function(){setInterval((function(){$.ajax({url:"ajax.php",data:{delay_order_processing:1}})}),this.delay)}},appLocation={pathname:location.pathname,search:location.search};function xverifyCustomHtml(e){return["<ul>",'<li style="height:20px"></li>',"<li>We suggest you to use the one below,</li>","<li><b> "+e+"</b></li>","<li>However, you may proceed without any corrections</li>","</ul>"].join("\n")}function getClientId(){if("undefined"!=typeof gtag){var e=document.currentScript||document.querySelector('script[src*="googletagmanager.com/gtag/js?id="]'),o=decodeURIComponent(e.src).split("?")[1].split("&")[0].split("=")[1];gtag("get",o,"client_id",(function(e){console.log(e),setClientId(e)}))}}function setClientId(e){$.ajax({url:app_config.offer_path+AJAX_PATH+"set-ga-client-id",method:"post",data:{clientId:e},success:function(e){console.log(e)}})}function addCsrfTokenToForm(){if(app_config.enable_csrf_token&&$("form").length){var e=!1,o=document.querySelectorAll("form");o.forEach((o=>{"checkout_form"!=o.name&&"downsell_form1"!=o.name&&"downsell_form2"!=o.name||(e=!0)})),e&&fetch(app_config.offer_path+AJAX_PATH+"get-refresh-token",{method:"POST",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>e.text())).then((function(e){o.forEach((o=>{"checkout_form"!=o.name&&"downsell_form1"!=o.name&&"downsell_form2"!=o.name||$("<input>").attr({type:"hidden",name:"csrf_token",value:e}).appendTo(o)}))}))}}window.addEventListener("popstate",(function(e){app_config.enable_browser_back_button&&"checkoutPage"==app_config.pageType?(history.pushState({urlPath:location.pathname+location.search},"",location.pathname+location.search),location.reload()):(location.reload(),history.forward())})),(navigator.userAgent.toLowerCase().indexOf("firefox")>-1||navigator.userAgent.toLowerCase().indexOf("Trident/")>-1)&&(app_config.enable_browser_back_button&&("checkoutPage"==app_config.pageType||"leadPage"==app_config.pageType)||history.pushState({},"",""));