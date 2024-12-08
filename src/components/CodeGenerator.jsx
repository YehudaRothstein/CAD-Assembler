import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import formalLogo from '../logo_formal.png'; // Adjust the path if necessary

const CodeGenerator = () => {
    const [year, setYear] = useState('2025');
    const [systemName, setSystemName] = useState('RBT');
    const [cadId, setCadId] = useState('');
    const [partName, setPartName] = useState('');
    const [manufacturingMethod, setManufacturingMethod] = useState('');
    const [width, setWidth] = useState('');
    const [widthUnit, setWidthUnit] = useState('');
    const [generatedCode, setGeneratedCode] = useState('');

    useEffect(() => {
        const generateCode = () => {
            const widthStr = (partName === 'WDPLATE' || partName === 'ALUMPLATE') && width && widthUnit
                ? `${width}${widthUnit}`
                : '';

            const codeParts = [
                year,
                systemName,
                cadId,
                partName,
                widthStr,
                manufacturingMethod,
            ];

            const filteredCodeParts = codeParts.filter(part => part);
            const code = filteredCodeParts.join('_');
            setGeneratedCode(code);
        };

        generateCode();
    }, [year, systemName, cadId, partName, width, widthUnit, manufacturingMethod]);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(generatedCode).then(() => {
            alert('Code copied to clipboard!');
        });
    };

    const handleCadIdChange = (e) => {
        const input = e.target.value;
        if (/^\d{0,3}$/.test(input)) {
            setCadId(input);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={formalLogo} alt="Formal Logo" style={{ width: '80px', marginRight: '20px' }} />
                <h1>FRC CAD Code Generator</h1>
            </div>
            <div>
                <label>Year</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="2025">2025 REEFSCPAE</option>
                    <option value="2024">2024 CRESCENDO</option>
                    <option value="2023">2023 CHARGED UP</option>
                    <option value="2022">2022 RAPID REACT</option>
                    <option value="2021">2021 INFINITE RECHARGE</option>
                    <option value="2020">2020 INFINITE RECHARGE</option>
                    <option value="2019">2019 DEEP SPACE</option>
                    <option value="2018">2018 POWER UP</option>
                    <option value="2017">2017 STEAMWORKS</option>
                    <option value="2016">2016 STRONGHOLD</option>
                </select>
            </div>

            <div>
                <label>System Name</label>
                <select value={systemName} onChange={(e) => setSystemName(e.target.value)}>
                    <option value="RBT">Robot</option>
                    <option value="BLCKBOT">Block Bots</option>
                    <option value="PTYPE">Prototype</option>
                </select>
            </div>

            <div>
                <label>CAD ID</label>
                <input
                    type="text"
                    value={cadId}
                    onChange={handleCadIdChange}
                    maxLength="3"
                />
            </div>

            <div>
                <label>Part Name</label>
                <select
                    value={partName}
                    onChange={(e) => {
                        setPartName(e.target.value);
                        if (e.target.value !== 'WDPLATE' && e.target.value !== 'ALUMPLATE') {
                            setWidth('');
                            setWidthUnit('');
                        }
                    }}
                >
                    <option value="">Select Part</option>
                    <option value="WDPLATE">Wood Plate</option>
                    <option value="ALUMPLATE">Aluminum Plate</option>
                    <option value="PRFL">Profile</option>
                    <option value="PLLY">Poly wheels</option>
                    <option value="3DPRNT">3D prints</option>
                    <option value="AXS">Axis</option>
                    <option value="WHLS">Wheels</option>
                    <option value="VRSA">Versa</option>
                    <option value="KRAKN">Kraken Motor</option>
                    <option value="NEO">NEO Motor</option>
                    <option value="BNEO">Baby NEO Motor</option>
                    <option value="VRTEX">Vortex Motor</option>
                </select>
            </div>

            {(partName === 'WDPLATE' || partName === 'ALUMPLATE') && (
                <div>
                    <label>Width of Plate</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="number"
                            placeholder="Width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                        <select value={widthUnit} onChange={(e) => setWidthUnit(e.target.value)}>
                            <option value="I">Inches</option>
                            <option value="M">Centimeters</option>
                        </select>
                    </div>
                </div>
            )}

            <div>
                <label>Manufacturing Method</label>
                <select value={manufacturingMethod} onChange={(e) => setManufacturingMethod(e.target.value)}>
                    <option value="CNC">CNC</option>
                    <option value="3DP">3D</option>
                    <option value="LSR">LASER</option>
                    <option value="MNAL">MANUAL</option>
                    <option value="SPNSR">SPONSORS</option>
                </select>
            </div>

            {generatedCode && (
                <div style={styles.codeContainer}>
                    <span>{generatedCode}</span>
                    <button
                        style={styles.copyButton}
                        onClick={handleCopyCode}
                        title="Copy to clipboard"
                    >
                        <i className="fa fa-copy"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    codeContainer: {
        padding: '15px',
        backgroundColor: '#f4f4f4',
        border: '1px solid #ccc',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'monospace',
    },
    copyButton: {
        backgroundColor: '#d4af37',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    }
};

export default CodeGenerator;