import { FilterValue } from '@/types';
import { format } from 'date-fns';
import { toast } from 'sonner';

export class HelperFunctions {

  static formatDate = (date: string) => format(new Date(date), 'yyyy-MM-dd');

  static formatAmountWithCurrency = (amount: number): string => {
    return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} GNF`;
  }

  static handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.info(`${key} copié dans le presse-papiers.`)
    } catch (err) {
      console.error({err})
      toast.error(`Impossible de copier le ${key}`)
    }
  };

  static isValidFilter = (value: FilterValue): boolean => {
    return value !== undefined && value !== null && value !== "";
  }

  static dateFilter = (query: Record<string, unknown>, dateFilter: FilterValue, fieldName: string = 'createdAt'): void => {
    if (!dateFilter || typeof dateFilter !== "object" || !("from" in dateFilter)) {
      return;
    }

    const { from, to } = dateFilter as { from?: Date; to?: Date | null };
    
    if (from) {
      query[fieldName] = { $gte: from };
      
      // Si 'to' est null, utiliser 'from' avec l'heure à 23:59:59
      const endDate = to || new Date(from.getTime());
      if (!to) {
        endDate.setHours(23, 59, 59, 999);
      }
      
      (query[fieldName] as Record<string, Date>).$lte = endDate;
    }
  }

  static searchFilter = (
    query: Record<string, unknown>, 
    search: FilterValue, 
    searchFields: string[] = ["name"]
  ): void => {
    if (!HelperFunctions.isValidFilter(search) || typeof search !== "string") {
      return;
    }

    const trimmedSearch = search.trim();
    if (trimmedSearch) {
      const searchRegex = new RegExp(trimmedSearch, "i");
      (query as Record<string, unknown>).$or = searchFields.map(field => ({ [field]: searchRegex }));
    }
  }

}