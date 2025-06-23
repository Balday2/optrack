import ExcelJS from 'exceljs';
import { format, parseISO } from 'date-fns';

export async function exportWeeklyReportExcel(data, startDate, endDate, filename = 'rapport_hebdomadaire.xlsx') {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Rapport');
  
  // Configuration des colonnes (ceci crée les en-têtes sur la ligne 1)
  worksheet.columns = [
    { header: 'N°', key: 'numero', width: 5 },
    { header: 'Region', key: 'region', width: 12 },
    { header: 'Centre', key: 'centre', width: 25 },
    { header: 'Matricule', key: 'matricule', width: 15 },
    { header: 'Nom', key: 'nom', width: 18 },
    { header: 'Fonctions', key: 'fonction', width: 20 },
    { header: 'Lundi', key: 'lundi', width: 8 },
    { header: 'Mardi', key: 'mardi', width: 8 },
    { header: 'mercredi', key: 'mercredi', width: 10 },
    { header: 'jeudi', key: 'jeudi', width: 8 },
    { header: 'vendredi', key: 'vendredi', width: 10 },
    { header: 'Totaux', key: 'totaux', width: 10 }
  ];

  // Insérer une ligne au-dessus pour le titre, ce qui décale les en-têtes à la ligne 2
  worksheet.insertRow(1, []);
  
  // Ajouter et styliser le titre sur la nouvelle ligne 1
  worksheet.mergeCells('A1:L1');
  const titleCell = worksheet.getCell('A1');
  
  const formattedStartDate = format(parseISO(startDate), 'dd-MM-yyyy');
  const formattedEndDate = format(parseISO(endDate), 'dd-MM-yyyy');
  titleCell.value = `Rapport hebdomadaire du ${formattedStartDate} au ${formattedEndDate}`;

  titleCell.font = { bold: true, size: 16, color: { argb: 'FFFFFFFF' } };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2E86AB' } };
  titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
  worksheet.getRow(1).height = 30;
  
  // Styliser l'en-tête des colonnes (qui est maintenant sur la ligne 2)
  const headerRow = worksheet.getRow(2);
  headerRow.height = 25;
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4A4A4A' } };
  headerRow.alignment = { horizontal: 'center', vertical: 'middle' };

  let currentRow = 3;
  
  data.forEach(regionData => {
    const startRow = currentRow;
    let regionTotalLundi = 0, regionTotalMardi = 0, regionTotalMercredi = 0;
    let regionTotalJeudi = 0, regionTotalVendredi = 0, regionTotalGeneral = 0;

    // Ajouter les centres de cette région
    regionData.centres.forEach((centre, index) => {
      const row = worksheet.getRow(currentRow);
      row.height = 20;
      const total = centre.lundi + centre.mardi + centre.mercredi + centre.jeudi + centre.vendredi;
      
      if (index === 0) {
        // Première ligne : afficher le N° et la région
        row.getCell(1).value = regionData.numero;
        row.getCell(2).value = regionData.region;
      }
      
      // Données du centre
      row.getCell(3).value = centre.centre;
      row.getCell(4).value = centre.matricule;
      row.getCell(5).value = centre.nom;
      row.getCell(6).value = centre.fonction;
      row.getCell(7).value = centre.lundi;
      row.getCell(8).value = centre.mardi;
      row.getCell(9).value = centre.mercredi;
      row.getCell(10).value = centre.jeudi;
      row.getCell(11).value = centre.vendredi;
      row.getCell(12).value = total;

      // Cumuler les totaux
      regionTotalLundi += centre.lundi;
      regionTotalMardi += centre.mardi;
      regionTotalMercredi += centre.mercredi;
      regionTotalJeudi += centre.jeudi;
      regionTotalVendredi += centre.vendredi;
      regionTotalGeneral += total;

      // Styliser les lignes de données
      row.eachCell((cell, colNumber) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FF000000' } },
          left: { style: 'thin', color: { argb: 'FF000000' } },
          bottom: { style: 'thin', color: { argb: 'FF000000' } },
          right: { style: 'thin', color: { argb: 'FF000000' } }
        };

        // Padding vertical sur toutes les cellules
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        if (colNumber >= 7 && colNumber <= 12) {
          cell.alignment = { horizontal: 'center', vertical: 'middle' };
        }
      });

      currentRow++;
    });

    // Ajouter la ligne de total pour la région
    const totalRow = worksheet.getRow(currentRow);
    totalRow.height = 20;
    totalRow.getCell(3).value = "Total d'expertise Techniques";
    totalRow.getCell(7).value = regionTotalLundi;
    totalRow.getCell(8).value = regionTotalMardi;
    totalRow.getCell(9).value = regionTotalMercredi;
    totalRow.getCell(10).value = regionTotalJeudi;
    totalRow.getCell(11).value = regionTotalVendredi;
    totalRow.getCell(12).value = regionTotalGeneral;

    // Styliser la ligne de total avec fond orange
    totalRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFA500' } };
    totalRow.font = { bold: true };
    totalRow.alignment = { horizontal: 'center', vertical: 'middle' };
    
    // Bordures pour la ligne de total
    totalRow.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF000000' } },
        left: { style: 'thin', color: { argb: 'FF000000' } },
        bottom: { style: 'thin', color: { argb: 'FF000000' } },
        right: { style: 'thin', color: { argb: 'FF000000' } }
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    // Fusionner les cellules N° et Région si plusieurs centres
    if (regionData.centres.length > 1) {
      worksheet.mergeCells(`A${startRow}:A${currentRow - 1}`);
      worksheet.mergeCells(`B${startRow}:B${currentRow - 1}`);
      
      // Centrer verticalement les cellules fusionnées
      const numeroCell = worksheet.getCell(`A${startRow}`);
      const regionCell = worksheet.getCell(`B${startRow}`);
      numeroCell.alignment = { vertical: 'middle', horizontal: 'center' };
      regionCell.alignment = { vertical: 'middle', horizontal: 'center' };
    }

    currentRow++;
  });

  // Télécharger le fichier
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}