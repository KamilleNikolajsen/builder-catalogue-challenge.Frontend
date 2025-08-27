import React from "react";

interface Props {
    sets: string[];
    username: string;
}

const BuildableSets: React.FC<Props> = ({ sets, username}) => {
    if (sets.length === 0) return <p>No buildable sets found.</p>;

    return (
        <ul className="SetsList">
            <h2 className="sets-title">Buildable Sets for user: {username}</h2>
            <p className="sets-count">Total: {sets.length}</p>
            {sets.map((set, i) => (
                <li key={i} className="set">{set}</li>
            ))}
        </ul>
    );
};

export default BuildableSets;