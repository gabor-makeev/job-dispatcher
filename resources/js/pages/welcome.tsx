import JobDispatcher from '@/components/JobDispatcher';
import { CompletedJobDTO } from '@/types/completed-job';
import { Head } from '@inertiajs/react';

export interface dndMonster {
    index: string,
    name: string,
}

interface Content {
    dnd_monsters: dndMonster[];
    completed_jobs: {
        a: CompletedJobDTO[];
        b: CompletedJobDTO[];
    };
}

export default function Welcome({ content }: {content: Content}) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <JobDispatcher dndMonsters={content.dnd_monsters} completedJobsDTO={content.completed_jobs} />
        </>
    );
}
