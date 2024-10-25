import { format } from 'date-fns';
import { toast } from 'sonner';

export const formatDate = (date: string) => format(new Date(date), 'yyyy-MM-dd');

export const formatAmountWithCurrency = (amount: number): string => {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} GNF`;
}

export const handleCopy = async (key: string, value: string) => {
  try {
    await navigator.clipboard.writeText(value);
    toast.info(`${key} copié dans le presse-papiers.`)
  } catch (err) {
    toast.error(`Impossible de copier le ${key}`)
  }
};