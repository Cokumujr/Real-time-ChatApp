const extractDate = (dateString) => {
    if (!dateString) {
      return 'N/A'; // Default placeholder if no date string is provided
    }
  
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Handle invalid date strings
    }
  
    // Extract day, month, and year
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
  
    // Format date as DD/MM/YYYY
    return `${day}/${month}/${year}`;
  };
  
  export default extractDate;
  