document.addEventListener("DOMContentLoaded", fetchData);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();

    // Display the data in the console or update the DOM as needed
    console.log(data[0]);

    // Example: Update the DOM
    const resultContainer = document.getElementById("here");
    resultContainer.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
