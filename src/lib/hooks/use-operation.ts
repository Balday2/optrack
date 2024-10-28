import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createOperation, getDailyOperations, getOperations, updateOperation } from '../actions/operation-action';
import { QUERY_KEY } from '../constants';
import { FilterParams } from '@/components/data-table/types';
import { useState, useTransition } from 'react';
import { useAppStore } from '../stores/app-store';
import { useForm } from 'react-hook-form';
import { CreateOperationDTO, CreateOperationSchema, OperationDTO, UpdateOperationDTO, UpdateOperationSchema } from '../dtos/operation_dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { handleClientError } from '../error-handler';
import { useSession } from 'next-auth/react';
import { utils, write, WorkBook } from 'xlsx'



interface UseGetOperationParams {
  filters?: FilterParams['filters'];
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
}



export function useGetOperations({filters, page, limit, currentUserId}: FilterParams & { currentUserId?: string }) {
  const { data: operations, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.OPERATIONS, {filters, page, limit}],
    queryFn: () => getOperations({
      filters,
      page: page ? page : undefined,
      limit: limit ? limit : undefined,
      currentUserId: currentUserId
    }),
    placeholderData: (prev) => prev,
  });

  return { operations, error, isLoading };
}

export function useDailyOperations(currentUserId?: string, role?: string) {
  const { data: operations, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY.DAILY_OPERATIONS],
    queryFn: () => getDailyOperations(currentUserId!, role),
    placeholderData: (prev) => prev,
  });

  return { operations, error, isLoading };
}


export function useCreateOperation(onClose: () => void) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()
  const { data: session } = useSession();

  const form = useForm<CreateOperationDTO>({
    resolver: zodResolver(CreateOperationSchema),
    defaultValues: {
      nombre: 0,
      date: new Date(),
      operator_id: "",
      centre_id: session?.user.centre_id,
      coordinator_id: session?.user.id
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await createOperation(data);
        toast.success("Operation créé avec succès.");
        form.reset();
        onClose();
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATIONS] });
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.DAILY_OPERATIONS] });
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error))
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

interface OperationProps {
  operationId: string
  onClose: () => void
}


export function useUpdateOperation({operationId, onClose}: OperationProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient()


  const form = useForm<UpdateOperationDTO>({
    resolver: zodResolver(UpdateOperationSchema),
      defaultValues: {},
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);
    startTransition(async () => {
      try {
        await updateOperation({operationId, operationData: data});
        toast.success("Operateur mis à jour avec succès.");
        form.reset();
        queryClient.invalidateQueries({ queryKey: [QUERY_KEY.OPERATIONS] });
        onClose();
      } catch (error: unknown) {
        toast.error(handleClientError(error))
        setError(handleClientError(error));
      }
    });
  });

  return { form, error, onSubmit, isPending };
}

// export data to xlsx format 

interface ExcelExportProps {
  data: any[];
}

export const operationExportData = ({ data }: ExcelExportProps) => {
  const wb: WorkBook = utils.book_new();

  // Main data sheet
  const mainWs = utils.json_to_sheet(data.map(item => ({
    "REGION": item.centre.commune,
    "NOMBRE": item.nombre,
    "CENTRE": item.centre.name,
    "OPERATEUR": `${item.operator_id.nom} ${item.operator_id.prenom}`,
    "MATRICULE": item.operator_id.matricule,
    "FONCTION": item.operator_id.role,
    "DATE": new Date(item.date).toLocaleDateString(),
  })));

  utils.book_append_sheet(wb, mainWs, "Données principales");

  // Operators sheet
  const operatorsWs = utils.json_to_sheet(Array.from(new Set(data.map(item => item.operator_id.id))).map(id => {
    const operator = data.find(item => item.operator_id.id === id)!.operator_id;
    return {
      ID: operator.id,
      Nom: operator.nom,
      Prénom: operator.prenom,
      Matricule: operator.matricule,
      Fonction: operator.role
    };
  }));

  utils.book_append_sheet(wb, operatorsWs, "Opérateurs");

  // Centers sheet
  const centersWs = utils.json_to_sheet(Array.from(new Set(data.map(item => item.centre.id))).map(id => {
    const centre = data.find(item => item.centre.id === id)!.centre;
    return {
      ID: centre.id,
      Nom: centre.name,
      Commune: centre.commune,
    };
  }));

  utils.book_append_sheet(wb, centersWs, "Centres");

  // Apply styles
  const styleSheet = (ws: any, sheetName: string) => {
    const range = utils.decode_range(ws['!ref']!);
    
    // Style for headers
    const headerStyle = {
      font: { bold: true, color: { rgb: "FFFFFF" }, sz: 12, name: "Arial" },
      fill: { fgColor: { rgb: "4472C4" } },
      alignment: { horizontal: "center", vertical: "center", wrapText: true },
      border: {
        top: { style: "medium", color: { rgb: "FFFFFF" } },
        bottom: { style: "medium", color: { rgb: "FFFFFF" } },
        left: { style: "medium", color: { rgb: "FFFFFF" } },
        right: { style: "medium", color: { rgb: "FFFFFF" } }
      }
    };

    // Style for data cells
    const cellStyle = {
      font: { color: { rgb: "000000" }, sz: 11, name: "Arial" },
      alignment: { vertical: "center", wrapText: true },
      border: {
        top: { style: "thin", color: { rgb: "D9D9D9" } },
        bottom: { style: "thin", color: { rgb: "D9D9D9" } },
        left: { style: "thin", color: { rgb: "D9D9D9" } },
        right: { style: "thin", color: { rgb: "D9D9D9" } }
      }
    };

    // Apply header style
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = utils.encode_col(C) + "1";
      if (!ws[address]) ws[address] = { v: "", t: "s" };
      ws[address].s = headerStyle;
    }

    // Apply cell style and alternate row colors
    for (let R = range.s.r + 1; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const address = utils.encode_cell({ r: R, c: C });
        if (!ws[address]) ws[address] = { v: "", t: "s" };
        ws[address].s = {
          ...cellStyle,
          fill: { fgColor: { rgb: R % 2 ? "F2F2F2" : "FFFFFF" } }
        };
      }
    }

    // Set column widths
    const colWidths = sheetName === "Données principales" 
      ? [{ wch: 15 }, { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 15 }, { wch: 25 }, { wch: 12 }]
      : [{ wch: 10 }, { wch: 20 }, { wch: 20 }, { wch: 15 }, { wch: 25 }];
    
    ws['!cols'] = colWidths;

    // Set row height for header
    ws['!rows'] = [{ hpt: 30 }];

    // Add total row for main sheet
    if (sheetName === "Données principales") {
      const totalRow = range.e.r + 1;
      ws[utils.encode_cell({ r: totalRow, c: 0 })] = { v: "Total", t: "s" };
      ws[utils.encode_cell({ r: totalRow, c: 1 })] = { f: `SUM(B2:B${totalRow})`, t: "n" };
      
      const totalStyle = {
        font: { bold: true, color: { rgb: "000000" }, sz: 12, name: "Arial" },
        fill: { fgColor: { rgb: "D9D9D9" } },
        alignment: { horizontal: "right", vertical: "center" },
        border: {
          top: { style: "medium", color: { rgb: "000000" } },
          bottom: { style: "medium", color: { rgb: "000000" } },
          left: { style: "medium", color: { rgb: "000000" } },
          right: { style: "medium", color: { rgb: "000000" } }
        }
      };

      for (let C = range.s.c; C <= range.e.c; ++C) {
        const address = utils.encode_cell({ r: totalRow, c: C });
        if (!ws[address]) ws[address] = { v: "", t: "s" };
        ws[address].s = totalStyle;
      }

      // Extend the range to include the total row
      ws['!ref'] = utils.encode_range({ s: range.s, e: { r: totalRow, c: range.e.c } });
    }
  };

  [
    { sheet: mainWs, name: "Données principales" },
    { sheet: operatorsWs, name: "Opérateurs" },
    { sheet: centersWs, name: "Centres" }
  ].forEach(({ sheet, name }) => styleSheet(sheet, name));

  // Generate Excel file
  const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `export_${new Date().toISOString()}.xlsx`);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
  window.URL.revokeObjectURL(url);
};