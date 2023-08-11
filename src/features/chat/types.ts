export interface Room {
    id: string;
}

export interface Message {
    id?: number;
    room: string;
    content: string;
    created_by?: string;
}