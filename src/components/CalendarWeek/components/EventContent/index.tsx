import { format } from 'date-fns';
import React from 'react';

const getDayString = (dates: any) => {
  const hours = dates.map((date: string | number | Date, index: number) => {
    return `${format(date, 'EEEE')}${index + 1 !== dates.length ? ' - ' : ''}`;
  });

  return hours;
};

const getHoursString = (dates: any) => {
  const hours = dates.map((date: string | number | Date, index: number) => {
    return `${format(date, 'HH:mm')}${index + 1 !== dates.length ? ' - ' : ''}`;
  });

  return hours;
};

const EventContent = (props: any) => {
  const { dateRange } = props;

  return (
    <div className="flex flex-col w-full h-full p-1 bg-purple-900">
      <a className="text-xs">{getDayString(dateRange)}</a>
      <a className="text-xs">{getHoursString(dateRange)}</a>
    </div>
  );
};

export default EventContent;
