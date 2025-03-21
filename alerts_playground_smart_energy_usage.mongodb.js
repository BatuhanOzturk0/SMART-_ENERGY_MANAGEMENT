// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("smart_energy_nosql");

// Create a Collection

db.createCollection("alerts");


// To verify a collection for have been checked.

db.getCollectionNames();

// 10 Data add to alerts collection.

db.alerts.insertMany([
    {user_id: 1 , message: "High energy usage detected this user", timestamp: new Date("2025-02-17T09:36:00Z") },
    {user_id: 2 , message: "Power outage detected in user area", timestamp: new Date("2025-02-17T12:12:36Z") },
    {user_id: 3 , message: "Energy consumption exceeded 50 kWh today", timestamp: new Date("2025-02-18T10:35:30Z") },
    {user_id: 4 , message: "Unusual power surge detected", timestamp: new Date("2025-02-18T14:45:00Z") },
    {user_id: 5 , message: "Solar panel efficiency decreased", timestamp: new Date("2025-02-18T15:10:30Z") },
    {user_id: 6 , message: "Battery storage below 20%", timestamp: new Date("2025-02-19T16:30:15Z") },
    {user_id: 7 , message: "Scheduled maintenance reminder", timestamp: new Date("2025-02-19T04:40:00Z") },
    {user_id: 8 , message: "Grid connection issue detected", timestamp: new Date("2025-02-20T22:20:56Z") },
    {user_id: 9 , message: "Device offline for more than 24 hours", timestamp: new Date("2025-02-20T:08:00:50Z") },
    {user_id: 10 , message: "New energy-saving tips available", timestamp: new Date("2025-02-20T20:30:00Z") },
]);

// Checking for alerts data

db.alerts.find().pretty();
