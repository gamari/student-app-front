// TODO axiosにする

export class UserFetcher {
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