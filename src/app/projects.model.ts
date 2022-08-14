export interface Project {
    id: string;
    name: string;
    description: string;
    status: "In Progress" | "Finished";
    createdOn: Date;
    image: URL | string;
    link: URL | string;
}