// TODO axiosにする

import axios from "axios";

export class UserFetcher {
    async getStudents(token: string) {
        const { data } = await axios.get("http://localhost:8000/students/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(data);

        return data
    }

    async fetchMe(access: string) {
        const { data } = await axios.get("http://localhost:8000/accounts/me/", {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        });
        console.log(data);
        return data
    }

    async fetchToken(email: string, password: string) {
        const res = await fetch("http://localhost:8000/auth/jwt/create/", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        return data;
    }

    async fetchRefreshToken(refresh: string) {
        const res = await fetch("http://localhost:8000/auth/jwt/refresh/", {
            method: "POST",
            body: JSON.stringify({ refresh }),
            headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) return null;

        const data = await res.json();
        return data;
    }
}