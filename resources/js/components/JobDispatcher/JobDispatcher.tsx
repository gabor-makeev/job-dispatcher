import { useEchoPublic } from "@laravel/echo-react";
import Container from "./components/Container";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import { useState } from "react";
import { dndMonster } from "@/pages/welcome";

export default function JobDispatcher ({ dndMonsters }: { dndMonsters: dndMonster[] }) {
	const [notifications, setNotifications] = useState<string[]>([]);

	useEchoPublic(
		'notifications', 
		'JobCompleted', 
		({ message }: {message: string}) => {
		setNotifications(prev => [message, ...prev]);
	})

	return (
		<Container>
			<Jobs dndMonsters={dndMonsters} />
			<Events notifications={notifications} />
		</Container>
	);
}