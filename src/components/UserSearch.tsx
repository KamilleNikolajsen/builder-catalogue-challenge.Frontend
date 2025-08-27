import React, { useState } from "react";

interface Props {
    onSearch: (username: string) => void;
}

const UserSearch: React.FC<Props> = ({ onSearch }) => {
    //brickfan35
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="input"
            />
            <button type="submit" className="submit-button">
                Search
            </button>
        </form>
    );
};

export default UserSearch;