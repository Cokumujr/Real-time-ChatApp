


const extractTime = (dateString) => {
    const date = new Date(dateString);
    
    // Extract hours and minutes
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    // Format time as HH:MM AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert hours to 12-hour format
    return `${formattedHours}:${minutes} ${ampm}`;
  };
  
  export default extractTime;
  