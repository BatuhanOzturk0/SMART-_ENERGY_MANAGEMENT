// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("smart_energy_nosql");

// Create a Collection 

db.createCollection("energy_logs");



// To check that collections have been created
db.getCollectionNames();

// 10 data add to energy_logs collections

db.energy_logs.insertMany([
    {device_id: 1,timestamp: new Date("2025-02-17T09:36:00Z"),consumption_kwh:3.5},
    {device_id: 1,timestamp: new Date("2025-02-17T12:12:36Z"),consumption_kwh:2.1},
    {device_id: 2,timestamp: new Date("2025-02-18T10:35:30Z"),consumption_kwh:1.8},
    {device_id: 3,timestamp: new Date("2025-02-18T14:45:00Z"),consumption_kwh:4.2},
    {device_id: 4,timestamp: new Date("2025-02-18T15:10:30Z"),consumption_kwh:5.3},
    {device_id: 5,timestamp: new Date("2025-02-19T16:30:15Z"),consumption_kwh:2.9},
    {device_id: 6,timestamp: new Date("2025-02-19T04:40:00Z"),consumption_kwh:3.7},
    {device_id: 7,timestamp: new Date("2025-02-20T22:20:56Z"),consumption_kwh:1.3},
    {device_id: 8,timestamp: new Date("2025-02-20T08:00:50Z"),consumption_kwh:2.8},
    {device_id: 9,timestamp: new Date("2025-02-20T20:30:00Z"),consumption_kwh:4.9},
]);

// Checking for dataset 

db.energy_logs.find().pretty();

