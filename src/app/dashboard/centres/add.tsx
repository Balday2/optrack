"use client"

import * as React from "react"
import { FormInput } from '@/components/form-input'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Form } from '@/components/ui/form'
import { FormError } from '@/components/form-error'
import { Loader2 } from 'lucide-react'
import { DialogAlert } from '@/components/dialog-alert'
import { useCreateCentre } from '@/lib/hooks/use-centre'
import { useAppStore } from '@/lib/stores/app-store'
import { useGetAllPrefecture, useGetCommunesByPrefectureId, useGetQuartiersByCommuneId } from '@/lib/hooks/use-centre'
import XCentreAdress from "./centre_adress"
import { CommuneDTO, PrefectureDTO, QuartierDTO } from "@/lib/dtos/centre_dto"

export default function NewCentrePage() {
  const { openToAddCentre, setOpenToAddCentre, selectedCentre } = useAppStore()
  
  const [selectedPrefecture, setSelectedPrefecture] = React.useState<PrefectureDTO | null>(null)
  const [selectedCommune, setSelectedCommune] = React.useState<CommuneDTO | null>(null)
  const [selectedQuartier, setSelectedQuartier] = React.useState<QuartierDTO | null>(null)
  
  const { prefectures, isLoading: isPrefecturesLoading } = useGetAllPrefecture()
  const { communes, isLoading: isCommunesLoading } = useGetCommunesByPrefectureId(selectedPrefecture?.prefecture_id ?? 0)
  const { quartiers, isLoading: isQuartiersLoading } = useGetQuartiersByCommuneId(selectedCommune?.commune_id ?? 0)
  const { form, onSubmit, error, isPending } = useCreateCentre({
    onClose: () => setOpenToAddCentre(false),
    prefecture: selectedPrefecture?.nom ?? '',
    commune: selectedCommune?.nom ?? '',
    quartier: selectedQuartier?.nom ?? '',
  })
  

  return (
    <DialogAlert 
      isOpen={openToAddCentre} 
      onClose={() => setOpenToAddCentre(false)} 
      title='Ajouter un centre'
      size='lg'
      description='Ajouter un nouveau centre'>
      <Form {...form}>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <FormInput
              form={form}
              name="name"
              label="Nom"
              type="standard"
              inputProps={{ 
                placeholder: "Entrez le nom du centre",
                defaultValue: selectedCentre?.name
              }}
            />

            <div className="flex flex-col space-y-1.5">
              <label>Préfecture</label>
              <XCentreAdress<PrefectureDTO>
                items={prefectures ?? []}
                selectedItem={selectedPrefecture}
                onSelectItem={(item) => {
                  setSelectedPrefecture(item);
                  setSelectedCommune(null);
                  setSelectedQuartier(null);
                }}
                placeholder="Sélectionner une préfecture"
                loading={isPrefecturesLoading}
                labelKey="nom"
                valueKey="prefecture_id"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label>Commune</label>
              <XCentreAdress<CommuneDTO>
                items={communes ?? []}
                selectedItem={selectedCommune}
                onSelectItem={(item) => {
                  setSelectedCommune(item);
                  setSelectedQuartier(null);
                }}
                placeholder="Sélectionner une commune"
                loading={isCommunesLoading}
                labelKey="nom"
                valueKey="commune_id"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label>Quartier</label>
              <XCentreAdress<QuartierDTO>
                items={quartiers ?? []}
                selectedItem={selectedQuartier}
                onSelectItem={(item, event) => {
                  event?.preventDefault();
                  setSelectedQuartier(item);
                }}
                placeholder="Sélectionner un quartier"
                loading={isQuartiersLoading}
                labelKey="nom"
                valueKey="quartier_id"
              />
            </div>

            {error && <FormError message={error} />}
          </CardContent>
          <CardFooter>
            <Button onClick={onSubmit} disabled={isPending} type="submit" className="w-full justify-center">
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Ajouter un centre
            </Button>
          </CardFooter>
        </form>
      </Form>
    </DialogAlert>
  )
}