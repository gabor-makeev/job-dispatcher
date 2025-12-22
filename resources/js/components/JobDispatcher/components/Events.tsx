export default function Events({ notifications }: { notifications: String[] }) {
	return (
		<div className="flex flex-col border rounded-2xl p-4 h-96">
			<span className="font-bold">Events:</span>
			<div className="h-full p-4 bg-gray-200 rounded-2xl overflow-y-auto">
				{notifications.length !== 0 && (
					<ul className="flex flex-col gap-1 w-full overflow-y-auto">
						{notifications.map((notification, idx) => (
							<li key={idx} className="underline">{notification}</li>
						))}
					</ul>
				)}
				{notifications.length === 0 && (
					<span>No notifications yet...</span>
				)}
			</div>
		</div>
	)
}