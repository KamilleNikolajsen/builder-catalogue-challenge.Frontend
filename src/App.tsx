import React, { useState } from "react";
import UserSearch from "./components/UserSearch";
import BuildableSets from "./components/BuildableSets";
import { fetchBuildableSets } from "./api";

const App: React.FC = () => {
    const [sets, setSets] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");

    const handleSearch = async (username: string) => {
        setUsername(username);
        setLoading(true);
        try {
            const result = await fetchBuildableSets(username);
            setSets(result);
        } catch (err) {
            console.error(err);
            setSets([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1 className="page-title">Builder Catalogue</h1>
            <UserSearch onSearch={handleSearch} />
            {loading ? <p className="p-4">Loading...</p> : <BuildableSets sets={sets} username={username} />}
        </div>
    );
};

export default App;