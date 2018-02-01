
(function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("won").style.display = "none";
    document.getElementById("grantWon").style.display = "none";
    var attackButton = document.getElementById("attackButton");
    var healButton = document.getElementById("healButton");
    var userHealthBar = document.getElementById("userHealth");
    var userHealBar = document.getElementById("userHeal");
    var userWinsBar = document.getElementById("userWins");
    var grantHealthBar = document.getElementById("grantHealth");
    var messageEl = document.getElementById("message");

    startButton.onclick = function() {
      document.getElementById("game").style.display = "";
      document.getElementById("startButton").style.display = "none";
      name = prompt("What's your name", "name");
      userHealth = 40, userDamageMax = 3, userHeal = 2, userHealMax = 10, userWins=0;
      grantHealth = 10, grantDamageMax = 5, grantHeal = 2, grantWins=0;
      updateDisplay();
      updateMessage(name + " health: "+userHealth+" heals remaining: "+userHeal +" wins: "+userWins+". Grant " + " health: "+grantHealth+" wins: "+grantWins+".");
    };

    attackButton.onclick = function() {
      userHealth -= Math.floor(Math.random() * userDamageMax) + 1;
      grantHealth -= Math.floor(Math.random() * grantDamageMax) + 1;
      if (grantHealth <=0) {
      userWins = userWins+ 1;
      userHealth = 40, grantHealth=10;
      console.log("userWins "+userWins);
      };
      if (userHealth <=0) {
      grantWins = grantWins+ 1;
      userHealth = 40, grantHealth=10;
      console.log("grantWins "+grantWins);
      };
      if (userWins >=3) {
      document.getElementById("won").style.display = "";
      document.getElementById("game").style.display = "none";
      console.log("won 3");
      };
      if (grantWins >=3) {
      document.getElementById("grantWon").style.display = "";
      document.getElementById("game").style.display = "none";
      console.log("grant won 3");
      };
      updateDisplay();
      updateMessage(name + " health: "+userHealth+" heals remaining: "+userHeal +" wins: "+userWins+". Grant " + " health: "+grantHealth+" wins: "+grantWins+".");
    };

    healButton.onclick = function() {
      userHeal--;
      console.log("userHeal "+userHeal);
      userHealth += Math.floor(Math.random() * userHealMax) + 1;
      if (userHeal <=0) {
        document.getElementById("healButton").style.display = "none";
      };
      updateDisplay();
      updateMessage(name + " health: "+userHealth+" heals remaining: "+userHeal +" wins: "+userWins+". Grant " + " health: "+grantHealth+" wins: "+grantWins+".");
    };

    quitButton.onclick = function() {
      updateDisplay();
      updateMessage(name + " quit.")
      document.getElementById("buttons").style.display = "none";
    };

    function updateDisplay() {
        userHealthBar.value = userHealth;
        userHealBar.value = userHeal;
        userWinsBar.value = userWins;
        grantHealthBar.value = grantHealth;
        name.value = name;

    }

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    }
})();
