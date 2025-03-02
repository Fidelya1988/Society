"use client"
 
import {useState} from "react"
import { ChevronsUpDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
const data = ['Flower House', 'Readit', 'My Bakkery']


export default function Organizations (){
    const [isOpen, setIsOpen] = useState(false)

    return (
      
   <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          My Organizations
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border px-4 py-3 font-mono text-sm">
       {data[0]}
      </div>
      <CollapsibleContent className="space-y-2">
      {data.map((item, index) => 
       index>0 && <div key={item} className="rounded-md border px-4 py-3 font-mono text-sm">
          {item}
        </div>)}
      
      </CollapsibleContent>
    </Collapsible>
      
    );
}