import { format, parseISO } from 'date-fns';

function dateToString(date) {
  if (!date) return '--/--/--';
  return format(parseISO(date), 'dd/MM/yyyy');
}

export default dateToString;
