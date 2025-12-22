export default function Container({ children }) {
	return (
		<div className="flex flex-col min-h-screen justify-between p-6">
			{ children }
		</div>
	)
}