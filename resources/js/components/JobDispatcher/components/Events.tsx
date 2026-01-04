import { CompletedJob } from "@/types/completed-job";

export default function Events({ completedJobsList }: { completedJobsList: CompletedJob[] }) {
	return (
		<div className="flex flex-col border rounded-2xl p-4 h-96">
			<span className="font-bold">Events:</span>
			<div className="h-full p-4 bg-gray-200 rounded-2xl overflow-y-auto">
				{completedJobsList.length !== 0 && (
					<ul className="flex flex-col gap-1 w-full overflow-y-auto">
						{completedJobsList.map((completedJob, idx) => (
							<li key={idx} className="underline">{ completedJob.created_at } | { completedJob.event_name } | { completedJob.message }</li>
						))}
					</ul>
				)}
				{completedJobsList.length === 0 && (
					<span>No notifications yet...</span>
				)}
			</div>
		</div>
	)
}