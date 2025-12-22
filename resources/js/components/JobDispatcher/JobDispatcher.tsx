import { useEchoPublic } from "@laravel/echo-react";
import Container from "./components/Container";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import { useState } from "react";

export default function JobDispatcher () {
	const [notifications, setNotifications] = useState<string[]>([]);

	useEchoPublic(
		'notifications', 
		'WeatherFound', 
		({ weather }: {weather: string}) => {
		setNotifications(prev => [weather, ...prev]);
	})

	return (
		<Container>
			<Jobs />
			<Events notifications={notifications} />
		</Container>
	);
}