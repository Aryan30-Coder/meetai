"use client"

import { ColumnDef } from "@tanstack/react-table"
import { AgentGetOne } from "../../types"
import { GeneratedAvatar } from "@/components/generate-avatar"
import { CornerDownRightIcon, VideoIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({row}) => (
        <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
                <GeneratedAvatar
                    variant="botttsNeutral"
                    seed={row.original.name}
                    className="size-8"
                />
                <span className="font-semibold capitalize">{row.original.name}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <CornerDownRightIcon className="size-3 text-muted-foreground"/>
                <span className="text-sm capitalize truncate max-w-50 text-muted-foreground">
                    {row.original.instructions}
                </span>
            </div>
        </div>
    )
  },
  {
    accessorKey: "meetings",
    header: "Meetings",
    cell: ({row}) => (
        <Badge
            variant="outline"
            className="flex items-center gap-x-4 [&_svg]:size-4"
        >
            <VideoIcon className="text-blue-700"/>
            <span>5 {row.original.meetingCount === 1 ? "meeting" : "meetings"}</span>
        </Badge>
    )
  }
]