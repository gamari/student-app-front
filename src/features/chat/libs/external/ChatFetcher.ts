import axios from "axios";
import { Message } from "../../types";

export class ChatFetcher {
    constructor(private token?: string) { }

    async createMessage(message: Message) {
        const headers: {
            [key: string]: string | string[]
        } = {}

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        const { data } = await axios.post("http://localhost:8000/room/messages/", message, {
            headers
        })

        return data;
    }

    async fetchMessages(room_id?: string) {
        const headers: {
            [key: string]: string | string[]
        } = {}

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        const { data: messages } = await axios.get(`http://localhost:8000/room/messages/?room_id=${room_id}`, {
            headers
        })

        return messages;
    }

    async fetchEnterRoom() {
        const headers: {
            [key: string]: string | string[]
        } = {}

        if (this.token) {
            headers["Authorization"] = `Bearer ${this.token}`
        }

        const { data } = await axios.post("http://localhost:8000/room/enter/", {}, {
            headers
        })

        console.log(data);
        return data;
    }
}