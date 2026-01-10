import { CompletedJobDTO, CompletedJobView } from "@/types/completed-job";

export default function Events({ completedJobsA, completedJobsB }: { completedJobsA: CompletedJobView[]; completedJobsB: CompletedJobView[] }) {
	return (
        <div className="flex justify-between gap-2">
            <div className="flex flex-col border rounded-2xl p-4 h-96 w-full">
                <span className="font-bold">Events (Database "A"):</span>
                <div className="h-full p-4 bg-gray-200 rounded-2xl overflow-y-auto">
                    {completedJobsA.length !== 0 && (
                        <ul className="flex flex-col gap-1 w-full overflow-y-auto">
                            {completedJobsA.map((completedJob, idx) => (
                                <li key={idx} className="underline">
                                    { completedJob.created_at.toISOString() } | { completedJob.event_name } | { completedJob.message }
                                </li>
                            ))}
                        </ul>
                    )}
                    {completedJobsA.length === 0 && (
                        <span>No notifications yet...</span>
                    )}
                </div>
		    </div>
            <div className="flex flex-col border rounded-2xl p-4 h-96 w-full">
                <span className="font-bold">Events (Database "B"):</span>
                <div className="h-full p-4 bg-gray-200 rounded-2xl overflow-y-auto">
                    {completedJobsB.length !== 0 && (
                        <ul className="flex flex-col gap-1 w-full overflow-y-auto">
                            {completedJobsB.map((completedJob, idx) => (
                                <li key={idx} className="underline">
                                    { completedJob.created_at.toISOString() } | { completedJob.event_name } | { completedJob.message }
                                </li>
                            ))}
                        </ul>
                    )}
                    {completedJobsB.length === 0 && (
                        <span>No notifications yet...</span>
                    )}
                </div>
		    </div>
        </div>
	)
}