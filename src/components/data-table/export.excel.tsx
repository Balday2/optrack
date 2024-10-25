"use client"

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ExportExcelProps {
  handleExport: () => void;
  loading: boolean;
}
const ExportExcelButton = ({ handleExport, loading }: ExportExcelProps) => {
  return (
      <Button
        size="sm"
        onClick={handleExport}
        variant="outline"
        className="h-7 gap-1 text-sm"
        disabled={loading}>
        <Download className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only">Exporter</span>
      </Button>
  );
};

export default ExportExcelButton;
