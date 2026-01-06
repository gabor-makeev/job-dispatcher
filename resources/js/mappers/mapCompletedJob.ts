import { CompletedJobDTO, CompletedJobView } from "@/types/completed-job";

export function mapCompletedJob(completedJobDto: CompletedJobDTO): CompletedJobView {
    const { created_at, updated_at } = completedJobDto;

    return { ...completedJobDto, created_at: new Date(created_at), updated_at: new Date(updated_at) }
}