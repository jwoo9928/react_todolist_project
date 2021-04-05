import React, {useState} from 'react';
import DatePicker from "react-native-datepicker";

const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showMonthDropdown
        useShortMonthInDropdown
        />
    );
}

export default DatePick;