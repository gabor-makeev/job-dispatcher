import { useEchoPublic } from "@laravel/echo-react";
import Container from "./components/Container";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import { useState } from "react";
import { dndMonster } from "@/pages/welcome";
import { CompletedJobDTO, CompletedJobView } from "@/types/completed-job";
import { mapCompletedJob } from "@/mappers/mapCompletedJob";

export default function JobDispatcher ({ dndMonsters, completedJobsDTO }: { dndMonsters: dndMonster[], completedJobsDTO: { a: CompletedJobDTO[]; b: CompletedJobDTO[] } }) {
    const completedJobsAView = completedJobsDTO.a.map(mapCompletedJob);
    const completedJobsBView = completedJobsDTO.b.map(mapCompletedJob);

	const [completedJobsA, setCompletedJobsA] = useState<CompletedJobView[]>(completedJobsAView);
    const [completedJobsB, setCompletedJobsB] = useState<CompletedJobView[]>(completedJobsBView);


	useEchoPublic(
		'notifications',
		'JobCompleted',
		({ completedJob }: { completedJob: CompletedJobDTO }) => {
            const completedJobView = mapCompletedJob(completedJob);

            if (completedJob.database === 'a') {
                setCompletedJobsA((prev) => [completedJobView, ...prev]);
            } 

            if (completedJob.database === 'b') {
                setCompletedJobsB((prev) => [completedJobView, ...prev]);
            }
	})

	return (
		<Container>
			<Jobs dndMonsters={dndMonsters} />
			<Events completedJobsA={completedJobsA} completedJobsB={completedJobsB} />
		</Container>
	);
}