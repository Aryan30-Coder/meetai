import { MeetingGetOne } from "../../types"

interface Props{
    data: MeetingGetOne
}

export const CompletedState = ({data}: Props) => {
    return (
        <div>
            CompletedState
            {data.agentId}
        </div>
    )
}