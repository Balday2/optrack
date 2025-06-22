import XHeader from "@/components/x-header";
import { RoleEnum } from "@/lib/Enums/role.enum";


export default function CoordinatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div 
     className="relative flex size-full min-h-screen flex-col bg-[#fcf8f8] group/design-root overflow-x-hidden"
     style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}
     >
      <div className="layout-container flex h-full grow flex-col">
        <XHeader role={RoleEnum.COORDINATOR} />
        <main className="pt-[76px]">
          { children }
        </main>
    </div>
    </div>
  )
}
