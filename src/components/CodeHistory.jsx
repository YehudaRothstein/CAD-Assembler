import React from 'react';

const CodeHistory = ({ history }) => {
    return (
        <div className="code-history">
            <h2>Code History</h2>
            {history.length === 0 ? (
                <p>No codes generated yet.</p>
            ) : (
                <ul>
                    {history.map((code, index) => (
                        <li key={index}>{code}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CodeHistory;
