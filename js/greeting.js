function getGreeting() {
  const hour = new Date().getHours();
  const name = "Nimbus-sudo";

  if (hour >= 5 && hour < 12) return `$ echo "Good morning"`;
  if (hour >= 12 && hour < 17) return `$ echo "Good afternoon"`;
  if (hour >= 17 && hour < 21) return `$ echo "Good evening"`;
  if (hour >= 21 && hour < 24) return `$ echo "Good night"`;
  return `$ echo "You're still here? Respect."`; // midnight/night owl
}

document.getElementById("greeting").textContent = getGreeting();
