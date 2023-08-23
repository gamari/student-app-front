export const fetcher = (url: string, token?: string): Promise<any> => {
    if (!token) return Promise.resolve(null);

    return fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};
