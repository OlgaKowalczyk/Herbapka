import React from 'react';
import DatePicker from 'datepicker';


const Date = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

export default Date;