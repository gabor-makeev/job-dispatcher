import { useEchoPublic } from "@laravel/echo-react";
import Container from "./components/Container";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import { useState } from "react";
import { dndMonster } from "@/pages/welcome";
import { CompletedJob } from "@/types/completed-job";

export default function JobDispatcher ({ dndMonsters, completedJobs }: { dndMonsters: dndMonster[], completedJobs: CompletedJob[] }) {
	const [completedJobsList, setCompletedJobsList] = useState<CompletedJob[]>(completedJobs);

	useEchoPublic(
		'notifications',
		'JobCompleted',
		({ completedJob }: { completedJob: CompletedJob }) => {
			setCompletedJobsList((prev) => [completedJob, ...prev]);
	})

	return (
		<Container>
			<Jobs dndMonsters={dndMonsters} />
			<Events completedJobsList={completedJobsList} />
		</Container>
	);
}