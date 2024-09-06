"use client"

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React, { useState } from "react";
import { FilterParams } from "./types";
// import appAxios from "@/lib/axios";

export interface ExportExcelProps {
  filters: FilterParams;
  endpoint: string;
  fileName: string;
}

const ExportExcelButton = ({ filters, endpoint, fileName }: ExportExcelProps) => {
  const [loading, setLoading] = useState(false);
  const handleExport = async () => {
    try {
      setLoading(true);
      // const response = await appAxios.get(endpoint, {
      //   responseType: "blob",
      //   params: {
      //     format: "excel",
      //     ...filters,
      //   },
      // });

      // const blob = new Blob([response.data], {
      //   type: response.headers["content-type"],
      // });
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // a.style.display = "none";
      // a.href = url;
      // a.download = `${fileName}.xlsx`;
      // document.body.appendChild(a);
      // a.click();
      // window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors de l'export:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <Button
        size="sm"
        onClick={handleExport}
        variant="outline"
        className="h-7 gap-1 text-sm"
        disabled={loading}
      >
        <Download className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only">Exporter</span>
      </Button>
  );
};

export default ExportExcelButton;
