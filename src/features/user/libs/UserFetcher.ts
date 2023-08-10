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
}