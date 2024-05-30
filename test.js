function countForFiveSeconds() {
    let count = 0;
    
    const interval = setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
    
    setTimeout(() => {
        clearInterval(interval);
        console.log("Counting stopped.");
    }, 5000);
}

countForFiveSeconds();