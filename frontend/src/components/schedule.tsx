import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import enUS from 'date-fns/locale/en-US';
import Rectangle from './Rectangle';


const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Schedule = () => {
    return (
      <Rectangle width="30%" height="60%" scrollable={true}>
        <Calendar
          localizer={localizer}
          defaultView='week'
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '500px' }}
        />
      </Rectangle>
    );
  };

export default Schedule;