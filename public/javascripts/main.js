var PRMPushService;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
PRMPushService = (function() {

  function PRMPushService() {
    this.bindFormSubmitListener = __bind(this.bindFormSubmitListener, this);
  }

  PRMPushService.prototype.bindFormSubmitListener = function() {
    $("#pushForm").live("submit", function(event) {

      event.preventDefault();
      event.stopPropagation();
      if ($.browser.msie) {
        event.originalEvent.keyCode = 0;
        event.originalEvent.cancelBubble = true;
        event.originalEvent.returnValue = false;
      }

      var message = $("#pushText").val();

      if (message != null && message != "") {

        var pushData = JSON.stringify({ "channel": "", "data": { "alert": message } });

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
            $("#result").show().removeClass().addClass("resultSuccess").html("<h2>Message Sent!</h2>").fadeOut(5000);
          },
          error: function() {
            $("#result").show().removeClass().addClass("resultError").html("<h2>ERROR! Please try again.</h2>").fadeOut(5000);
          }
        });
      } else {
        $("#pushText").focus();
        $("#result").show().removeClass().addClass("resultError").html("<h2>ERROR! Message can't be empty.</h2>").fadeOut(5000);
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

  PRMPushService.prototype.log = function(){
    console.log("TEST");
  };

  return PRMPushService;

})();

this.push = new PRMPushService();