// Placeholder data and functions, replace with database interaction later
const familyTree = {
  members: [
    { name: 'John Doe', relation: 'Father', healthRisks: ['Hypertension'] },
    { name: 'Jane Doe', relation: 'Mother', healthRisks: ['Diabetes'] }
  ]
};

const getFamilyTree = () => familyTree;
const getHealthRisks = () => familyTree.members.map(member => member.healthRisks).flat();

module.exports = { getFamilyTree, getHealthRisks };
