const dogBtn = document.querySelector("#dogBtn");
const dogImg = document.querySelector("#dogImage");

dogBtn.addEventListener("click", getdogImg);

async function getdogImg() {
  try {
    dogBtn.disabled = true;
    dogBtn.textContent = "Fetching the image for you..";

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Failed to fetch the image.");
    }

    const data = await response.json();
    dogImg.src = data.message;
  } catch (error) {
    console.error(error);
  } finally {
    dogBtn.disabled = false;
    dogBtn.textContent = "Get New Dog";
  }
}
