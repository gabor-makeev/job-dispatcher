import { useEchoPublic } from "@laravel/echo-react";
import Container from "./components/Container";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import { useState } from "react";
import { dndMonster } from "@/pages/welcome";
import { CompletedJobDTO, CompletedJobView } from "@/types/completed-job";
import { mapCompletedJob } from "@/mappers/mapCompletedJob";

export default function JobDispatcher ({ dndMonsters, completedJobsDTO }: { dndMonsters: dndMonster[], completedJobsDTO: CompletedJobDTO[] }) {
    const completedJobsView = completedJobsDTO.map(mapCompletedJob);
	const [completedJobs, setCompletedJobs] = useState<CompletedJobView[]>(completedJobsView);

	useEchoPublic(
		'notifications',
		'JobCompleted',
		({ completedJob }: { completedJob: CompletedJobDTO }) => {
            const completedJobView = mapCompletedJob(completedJob);
			setCompletedJobs((prev) => [completedJobView, ...prev]);
	})

	return (
		<Container>
			<Jobs dndMonsters={dndMonsters} />
			<Events completedJobs={completedJobs} />
		</Container>
	);
}