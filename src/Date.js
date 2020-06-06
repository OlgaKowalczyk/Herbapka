import React from 'react';
import DatePicker from 'datepicker';


const Date = () => {
    
    const [date, setDate] = useState(new Date());
    
    return (
      <DatePicker selected={Date} onChange={date => setDate(date)} />
    );
  };

export default Date;