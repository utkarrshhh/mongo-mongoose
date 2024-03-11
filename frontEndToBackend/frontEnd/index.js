const name = document.getElementById("userName");
const roll = document.getElementById("userRoll");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const obj = {
    name: name.value,
    roll: roll.value,
  };

  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
});
