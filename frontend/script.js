// Fetch family tree data
fetch('http://localhost:3000/api/family-tree')
    .then(response => response.json())
    .then(data => {
        const familyTreeDiv = document.getElementById('family-tree');
        familyTreeDiv.innerHTML = '<h2>Family Tree</h2>';
        data.members.forEach(member => {
            familyTreeDiv.innerHTML += `<p>${member.name} (${member.relation})</p>`;
        });
    });

// Fetch health risks data
fetch('http://localhost:3000/api/health-risks')
    .then(response => response.json())
    .then(data => {
        const healthRisksDiv = document.getElementById('health-risks');
        healthRisksDiv.innerHTML = '<h2>Health Risks</h2>';
        data.forEach(risk => {
            healthRisksDiv.innerHTML += `<p>${risk}</p>`;
        });
    });

