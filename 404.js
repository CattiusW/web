  // Get references to DOM elements
  var terminalContainer = document.getElementById('terminal');
  var terminalText = document.getElementById('terminal-text');
  var videoBackground = document.getElementById('myVideo');
  var audioBackground = document.getElementById('myAudio');
  var blurredBox = document.getElementById('blurred-box');
  var closeButton = document.getElementById('close-button');

  // Initial terminal text content
  var terminalTextContent = [
      "404",
      "This page could not be found",
      "Try checking the British Museum", // System information placeholder
      "If it hasn't been taken there then:",
      "Try donating to Amnesty International,",
      "Clearing your browser Cache,",
      "And if all else fails,",
      "Press Enter To Continue",

  ];
  var currentIndex = 0;

  // Pause background video and audio
  videoBackground.pause();
  audioBackground.pause();

  // Function to type out terminal text
  function typeWriter() {
@@ -53,8 +48,7 @@
  function handleInput() {
      // Hide terminal, play background video and audio, and show blurred box
      terminalContainer.style.display = 'none';
      videoBackground.play();
      audioBackground.play();
      blurredBox.style.display = 'block';
      removeEventListeners(); // Remove event listeners after handling input
  }
@@ -88,12 +82,12 @@
      .then(response => response.json())
      .then(data => {
          var ipAddress = data.ip;
          //terminalTextContent[1] = "IP: " + ipAddress;
          typeWriter();
      })
      .catch(error => {
          console.error('Error fetching IP address:', error);
          //terminalTextContent[1] = "IP: Unable to fetch IP address";
          typeWriter();
      });

@@ -188,48 +182,48 @@

  // Get the operating system information
  var operatingSystem = getOperatingSystem();
  document.getElementById("user-description").innerHTML = 'Send me an <a href="mailto:cassius@mangopi.xyz" style="color:white;text-decoration:none;"><strong>email</strong></a> with this info:<br> <p style="font-size:7px">System: ' + operatingSystem + '<br>Url:' + window.location.href + '</p>';

  // Center the terminal window on the screen
  function centerTerminal() {
      var terminalWidth = terminalContainer.offsetWidth;
      var terminalHeight = terminalContainer.offsetHeight;
      var centerX = (window.innerWidth - terminalWidth) / 2;
      var centerY = (window.innerHeight - terminalHeight) / 2;

      terminalContainer.style.position = 'absolute';
      terminalContainer.style.left = centerX + 'px';
      terminalContainer.style.top = centerY + 'px';
  }

  // Center the terminal initially and on window resize
  centerTerminal();
  window.addEventListener('resize', centerTerminal);

  // Center the ASCII art within the terminal window
  terminalText.style.textAlign = 'center';

  // Function to generate ASCII art
  function getAsciiArt() {
      return ``;
  }

  // Get the audio element
  var audio = document.getElementById("myAudio");

  // Set the maximum volume level (between 0 and 1)
  var maxVolume = 0.1; // Adjust this value as needed

  // Function to limit the volume
  function limitVolume(volume) {
      if (volume > maxVolume) {
          audio.volume = maxVolume; // Set volume to the maximum allowed
      } else {
          audio.volume = volume; // Set volume to the provided value
      }
  }

  // Example usage:
  // Set volume to 0.7 (will be limited to maxVolume)
  limitVolume(0.1);
});
