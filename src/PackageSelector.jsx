import React, { useState } from 'react';

const CustomSlider = ({ value, onChange, max, levels }) => (
  <div>
    
    <input
      type="range"
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
    />
    <div className="flex justify-between mt-2">
      {levels.map((level, index) => (
        <div
          key={index}
          className={`text-xs text-center ${
            index === value ? 'font-bold text-gold' : 'text-black'
          }`}
        >
          {level.split('\n').map((line, lineIndex) => (
            <div key={lineIndex}>{line}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const PackageSelector = () => {
  const [networkCapability, setNetworkCapability] = useState(2);
  const [cybersecCapability, setCybersecCapability] = useState(2);
  const [dataStorageCapability, setDataStorageCapability] = useState(2);
  const [slaRequirements, setSlaRequirements] = useState(2);

  const networkLevels = [
    "Basic\n(Switches)",
    "Standard\n(Switches, Routers)",
    "Advanced\n(Switches, Routers, Firewall)",
    "Premium\n(Switches, Routers, Firewall, 24/7 Support)",
    "Enterprise\n(Custom Solution)"
  ];
  
  const cybersecLevels = [
    "Basic\n(Essential antivirus/antimalware protection \nFirewall configuration)",
    "Standard\n(Basic services\n Intrusion detection system (IDS), \nRegular security audits \nEmployee security awareness training)",
    "Advanced\n(Standard services\n Intrusion Prevention System (IPS)\nVulnerability assessments\nIncident response planning)",
    "Premium\n(Advanced services\n24/7 Security Operations Center (SOC)\nThreat intelligence integration\nAdvanced endpoint protection)",
    "Enterprise\n(Custom Solution\nFull-scale security architecture\nAI-driven threat detection\nCompliance management)"
  ];

  const dataStorageLevels = [
    "Basic\n(Local storage\nManual backups)",
    "Standard\n(Network-attached storage (NAS)\nScheduled backups\nBasic data retention)",
    "Advanced\n(SAN or NAS\nAuto backups\nData encryption\nBasic disaster recovery)",
    "Premium\n(Hybrid cloud storage\nReal-time backups\nAdvanced encryption\nComprehensive disaster recovery)",
    "Enterprise\n(Custom multi-cloud solution\nGlobal data replication\nAI-driven data management\nZero downtime DR)"
  ];

  const slaLevels = [
    "Basic\n(99% uptime\nNext business day response)",
    "Standard\n(99.5% uptime\n8-hour response time\nBasic performance metrics)",
    "Advanced\n(99.9% uptime\n4-hour response time\nDetailed performance reporting)",
    "Premium\n(99.99% uptime\n1-hour response time\n24/7 support\nProactive monitoring)",
    "Mission Critical\n(99.999% uptime\n15-minute response time\nDedicated support team\nReal-time performance dashboards)"
  ];

  return (
    <div className='max-w-2xl mx-auto p-6 bg-dark-blue rounded-lg shadow-xl text-black'>
      <h1 className="text-2xl font-bold mb-6 text-center text-gold">IT Infrastructure Planner</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gold">Network Capability</h2>
        <CustomSlider
          value={networkCapability}
          onChange={setNetworkCapability}
          max={networkLevels.length - 1}
          levels={networkLevels}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gold">Cybersecurity Capability</h2>
        <CustomSlider
          value={cybersecCapability}
          onChange={setCybersecCapability}
          max={cybersecLevels.length - 1}
          levels={cybersecLevels}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gold">Data Storage and Backup Capability</h2>
        <CustomSlider
          value={dataStorageCapability}
          onChange={setDataStorageCapability}
          max={dataStorageLevels.length - 1}
          levels={dataStorageLevels}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gold">SLA Requirements</h2>
        <CustomSlider
          value={slaRequirements}
          onChange={setSlaRequirements}
          max={slaLevels.length - 1}
          levels={slaLevels}
        />
      </div>

      <div className="mt-6 p-4 bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gold">Selected Network Capability:</h3>
        <p className="text-black">{networkLevels[networkCapability]}</p>
      </div>

      <div className="mt-6 p-4 bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gold">Selected Cybersecurity Capability:</h3>
        <p className="text-black">{cybersecLevels[cybersecCapability]}</p>
      </div>

      <div className="mt-6 p-4 bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gold">Selected Data Storage and Backup Capability:</h3>
        <p className="text-black">{dataStorageLevels[dataStorageCapability]}</p>
      </div>

      <div className="mt-6 p-4 bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gold">Selected SLA Requirements:</h3>
        <p className="text-black">{slaLevels[slaRequirements]}</p>
      </div>
    </div>
  );
};

export default PackageSelector;