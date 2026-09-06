export type Subject = {
    id: string;
    name: string;
};

export type Requirement = {
    id: string;
    created_at: string;
    deadline: string;
    note: string;
    subject: string;
    finished: boolean;
};

