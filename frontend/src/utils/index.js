import { format } from 'date-fns';

export const maskDate = (date) => {
  return format(new Date(date), 'dd/MM/yyyy');
}

export const maskCurrency = (value) => {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}