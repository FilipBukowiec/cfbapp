
export function countdown(eventDate) {
    const CurrentTime = new Date();
    const eventObj = new Date(eventDate);
    const difference = eventObj - CurrentTime;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
  
    
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
