export interface Course {
    title: string;
    start_time?: Date;
    end_time?: Date;
}

export interface ProposeDate {
    title: string;
    start_time: Date;
    end_time: Date;
    course_duration: number;
    // student
}