var PRMPushService;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
PRMPushService = (function() {

  function PRMPushService() {
    this.bindFormSubmitListener = __bind(this.bindFormSubmitListener, this);
  }

  PRMPushService.prototype.bindFormSubmitListener = function() {
    $("#pushForm").live("submit", function(e) {

      push.stopEvent(e);

      var message = $("#pushText").val();

      if (message != null && message != "") {

        var jsonData = {};
        jsonData.channel = "";
        jsonData.data    = {};
        jsonData.data.alert = message;

        var typeVal = push.getTypeValue();

        if(typeVal != null && typeVal != "" && typeVal != "all"){
          jsonData.type = typeVal;
        }

        var pushData = JSON.stringify( jsonData );

        console.log(pushData);

        $.ajax({
          type: "POST",
          url: "https://api.parse.com/1/push",
          headers:{
             "Content-Type": "application/json",
             "X-Parse-Application-Id": "EEbtHrGxDjsrgTSwSCnFVGQIPuc0fqMnRz8Tc3c5",
             "X-Parse-REST-API-Key": "cRot5BvpOJjtkANZ9kGdaqvxogRQH0VSrTqzJRCC"
          },
          data: pushData,
          dataType: "json",
          success: function() {
            $("#pushText").val("");
            $("#result").hide().removeClass().addClass("resultSuccess").html("<h2>Message Sent!</h2>").fadeIn().delay(2000).fadeOut();
          },
          error: function() {
            $("#result").hide().removeClass().addClass("resultError").html("<h2>ERROR! Please try again.</h2>").fadeIn().delay(2000).fadeOut();
          }
        });
      } else {
        $("#pushText").focus();
        $("#result").hide().removeClass().addClass("resultError").html("<h2>ERROR! Message can't be empty.</h2>").fadeIn().delay(2000).fadeOut();
      }
      return false;
    });
  };

  PRMPushService.prototype.stopEvent = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if ($.browser.msie) {
      event.originalEvent.keyCode = 0;
      event.originalEvent.cancelBubble = true;
      event.originalEvent.returnValue = false;
    }
  };

  PRMPushService.prototype.getTypeValue = function() {
    var radio, radios, value = null, _i, _len;
    radios = $("input[type='radio']");
    for (_i = 0, _len = radios.length; _i < _len; _i++) {
      radio = radios[_i];
      if (radio.checked) {
        value = radio.value;
      }
    }
    return value;
  };

  PRMPushService.prototype.log = function(){
    console.log("TEST");
  };

  return PRMPushService;

})();

this.push = new PRMPushService();