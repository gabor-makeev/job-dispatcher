export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen justify-between p-6">
			{ children }
		</div>
	)
}