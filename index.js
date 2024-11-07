function countUp(element, target) {
    let count = 0;
    const increment = target / 100; 
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(count);
    }, 20); 
}

document.addEventListener("DOMContentLoaded", () => {
    const experience = document.getElementById("co");
    const websites = document.getElementById("ou");
    const apps = document.getElementById("ut");

    countUp(experience, 15);    
    countUp(websites, 260);    
    countUp(apps, 27);         
});
