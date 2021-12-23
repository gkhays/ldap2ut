function getLdapTime() {
  return (
    (new Date().getTime() - new Date(Date.UTC(1601, 0, 1)).getTime()) * 1e4
  );
}

function gregToJuli(n) {
  var millis = n / 10000;
  var newDate = new Date(millis);
  console.log("Input in ms: " + millis + "\n");
  newYear = newDate.getFullYear();

  if (n == 0) console.warn("Use a non-zero input value");
  if (newYear > 9999) console.warn("Easy there!");

  // Subtract number of years from 1601 to 1970.
  newDate.setFullYear(newYear - 369);
  timeStamp = newDate.getTime() + 1000 * 60 * 60 * 24; // Adjust by 1 day.
  return timeStamp;
}

function ldapToUT(n) {
  return new Date(n / 1e4 + new Date(Date.UTC(1601, 0, 1)).getTime());
}

$(document).ready(function () {
  $("#timestamp").val(getLdapTime());
  $("#convert").click(function () {
    console.log("Clicking convert button...");
    $("#convertOld").val(gregToJuli($("#timestamp").val()));
    var convertDate = ldapToUT($("#timestamp").val());
    console.log("Converted date: " + convertDate);
    $("#log").append("Human readable: " + convertDate + "\n");
    $("#converted").val(convertDate.getTime());
    $("#timestamp").focus();
    $("#convert").attr("disabled", true);
  });

  $("#timestamp").change(function () {
    $("#convert").attr("disabled", false);
  });
});
