"use client"
import { useState } from "react"

import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NewAgentDialog } from "./agent-dialog"

export const AgentsListHeader = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
        <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

        <div className="px-4 py-4 md:px-8 flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h5 className="font-medium text-xl">My Agents</h5>
                <Button onClick={() => {setIsDialogOpen(true)}}>
                    <PlusIcon />
                    Create Agent
                </Button>
            </div>
        </div>
    </>
  )
}