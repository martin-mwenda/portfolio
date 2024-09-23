const express = require('express');
const router = express.Router();
const Family = require('../models/family');

// Example route to fetch family tree data
router.get('/family-tree', (req, res) => {
  const familyTree = Family.getFamilyTree();  // You can replace this with actual logic later
  res.json(familyTree);
});

// Example route to fetch health risks
router.get('/health-risks', (req, res) => {
  const healthRisks = Family.getHealthRisks();  // Replace with actual data
  res.json(healthRisks);
});

module.exports = router;
