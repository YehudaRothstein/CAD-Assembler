import React, { useState } from 'react';

const CodeGenerator = ({ addToHistory }) => {
    const [cadId, setCadId] = useState('');
    const [system, setSystem] = useState('RBT');
    const [part, setPart] = useState('WDPLATE');
    const [method, setMethod] = useState('CNC');
    const [year, setYear] = useState('2025');
    const [code, setCode] = useState('');

    const handleGenerateCode = () => {
        if (!cadId || cadId.length !== 3) {
            alert('Please enter a valid 3-digit CAD ID!');
            return;
        }

        const generatedCode = `${year}_${system}_${cadId}_${part}_${method}`;
        setCode(generatedCode);
        addToHistory(generatedCode);

        // Copy to clipboard
        navigator.clipboard.writeText(generatedCode).then(() => {
            alert('Code copied to clipboard!');
        });

        // Clear input
        setCadId('');
    };

    return (
        <div className="code-generator">
            <h1>Excalibur 6738 CAD Code Generator</h1>

            <label>Year:</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="2025">2025 REEFSCPAE</option>
                <option value="2024">2024 CRESCENDO</option>
                <option value="2023">2023 CHARGED UP</option>
                <option value="2022">2022 RAPID REACT</option>
                <option value="2021">2021 INFINITE RECHARGE </option>
                <option value="2020">2020 INFINITE RECHARGE</option>
                <option value="2019">2019 DEEP SPACE</option>
                <option value="2018">2018 POWER UP</option>
                <option value="2017">2017 STEAMWORKS</option>
                <option value="2016">2016 STRONGHOLD</option>
            </select>

            <label>CAD ID (3-digit):</label>
            <input
                type="text"
                value={cadId}
                maxLength="3"
                onChange={(e) => setCadId(e.target.value)}
                placeholder="Enter 3-digit CAD ID"
            />

            <label>System:</label>
            <select value={system} onChange={(e) => setSystem(e.target.value)}>
                <option value="RBT">Robot</option>
                <option value="BLCKBOT">Block Bot</option>
                <option value="PTYPE">Prototype</option>
            </select>

            <label>Part:</label>
            <select value={part} onChange={(e) => setPart(e.target.value)}>
                <option value="WDPLATE">Wood Plate</option>
                <option value="ALUMPLATE">Aluminium Plate</option>
                <option value="PRFL">Profile</option>
                <option value="PLLY">Poly Wheels</option>
                <option value="3DPRNT">3D Prints</option>
                <option value="AXS">Axis</option>
                <option value="WHLS">Wheels</option>
                <option value="VRSA">Versa</option>
                <option value="KRAKN">Kraken</option>
                <option value="NEO">NEO</option>
                <option value="BNEO">Baby NEO</option>
                <option value="VRTEX">Vortex</option>
            </select>

            <label>Manufacturing Method:</label>
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="CNC">CNC</option>
                <option value="3DP">3D</option>
                <option value="LSR">Laser</option>
                <option value="MNAL">Manual</option>
                <option value="SPNSR">Sponsors</option>
            </select>

            <button onClick={handleGenerateCode}>Generate Code</button>

            {code && <p className="generated-code">Generated Code: {code}</p>}
        </div>
    );
};

export default CodeGenerator;
