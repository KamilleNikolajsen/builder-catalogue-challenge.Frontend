export async function fetchBuildableSets(username: string): Promise<string[]> {
    const response = await fetch(`http://localhost:5000/api/BuildCatalogue/buildable-sets/by-user/${username}`);
    if (!response.ok) {
        throw new Error("Failed to fetch buildable sets");
    }
    return response.json();
}