const bike = document.getElementById('bike');  
const pedalButton = document.getElementById('pedalButton');  
const resetButton = document.getElementById('resetButton');  
const obstacle = document.getElementById('obstacle');  
  
let bikePosition = 10;  
const bikeStep = 10;  
const bikeImages = ['images/bike1.png', 'images/bike2.png', 'images/bike3.png', 'images/bike4.png', 'images/bike5.png'];  
let currentBikeImageIndex = 0;  
const obstacleRight = obstacle.offsetLeft + obstacle.offsetWidth;  
  
pedalButton.addEventListener('click', () => {  
    // Update bike image  
    currentBikeImageIndex = (currentBikeImageIndex + 1) % bikeImages.length;  
    bike.src = bikeImages[currentBikeImageIndex];  
  
    // Calculate the new position of the bike  
    let newPosition = bikePosition + bikeStep;  
  
    // Check for collision with the obstacle  
    if (newPosition + bike.offsetWidth >= obstacleRight - 10) {  
        // Collision detected  
        bike.src = 'images/bicycle-down.png';  
        pedalButton.disabled = true; // Disable the pedal button after collision  
    } else {  
        // Move the bike to the new position  
        bike.style.left = `${newPosition}px`;  
        bikePosition = newPosition;  
    }  
});  
  
resetButton.addEventListener('click', () => {  
    // Reset the bike to its initial position and image  
    bike.style.left = '10px';  
    bikePosition = 10;  
    currentBikeImageIndex = 0; // Reset to the first bike image  
    bike.src = bikeImages[currentBikeImageIndex];  
    pedalButton.disabled = false; // Re-enable the pedal button  
});