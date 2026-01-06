export interface CompletedJobDTO {
	id: number;
	event_name: string;
	message: string;
	created_at: string;
	updated_at: string;
}

export type CompletedJobView = Omit<CompletedJobDTO, 'created_at' | 'updated_at'> & {
	created_at: Date
    updated_at: Date
}
