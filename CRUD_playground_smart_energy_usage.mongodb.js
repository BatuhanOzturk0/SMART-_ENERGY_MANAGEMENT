// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


//             CREATE



// The current database to use.
use("smart_energy_nosql");

//  2 New value add to 'energy_logs' collection.

db.energy_logs.insertMany([
    {  
        device_id: 10,
        timestamp: new Date("2025-02-21T12:00:00Z"),
        consumption_kWh: 5.8
    },
    {
        device_id: 11,
        timestamp: new Date("2025-02-21T15:35:00Z"),
        consumption_kWh: 6.6
    },
]);

// Checking added value 'energy_logs'
db.energy_logs.find().pretty();


// 2 New value add to 'alerts' collection.

db.alerts.insertMany([
    {
        user_id: 11,
        message: "New power-saving alert generated",
        timestamp: new Date("2025-02-21T13:00:00Z")
    },
    {
        user_id: 12,
        message: " User energy consumption is 25% lower than last week!",
        timestamp: new Date("2025-02-21T17:35:00Z")
    }
]);


// Checking added value 'alerts'
db.alerts.find().pretty();



//                        READ



// Try to now for  step Read (energy_logs).


// 1- Firstly try to show all energy_logs value.
use("smart_energy_nosql");
db.energy_logs.find().pretty();

// 2- Show records with device_id : 1 ( we need to comment 'use' start the this code.So if we want to try this code , you can use under code before this index '//')  
use("smart_energy_nosql");
db.energy_logs.find({device_id: 1 }).pretty();

// 3- Show the created value after 18 february 2025
use("smart_energy_nosql");
db.energy_logs.find({ timestamp: { $gt:ISODate("2025-02-18T00:00:00Z") } }).pretty();

// 4- Sort energy consumption records higher than lower.
use("smart_energy_nosql");
db.energy_logs.find().sort({consumption_kwh: -1 }).pretty();



// Try to now for step Read (alerts).


// 1- Firstly try to show all energy_logs value.
use("smart_energy_nosql");
db.energy_logs.find().pretty();

// 2- Show records with user_id : 1 ( we need to comment 'use' start the this code.So if we want to try this code , you can use under code before this index '//')
use("smart_energy_nosql");
db.alerts.find({user_id: 5 }).pretty();

// 3- Get the last 3 alerts ( sorted by timestamp)
use("smart_energy_nosql");
db.alerts.find().sort({timestamp: -1}).pretty();





//                      UPDATE



// For energy_logs

use("smart_energy_nosql");

// Update the consumption the record device_id: 10 
db.energy_logs.updateOne(
    {device_id: 10},
    {$set:{consumption_kwh:9.0} }
);

// For alerts

use("smart_energy_nosql");

// Update the message the record user_id: 11
db.alerts.updateOne(
    {user_id:11},
    {$set: {message:"Updated : User power-saving alert has been modified"}}
);




//                     DELETE


// For energy_logs

use("smart_energy_nosql");

// Delete device_id: 10
db.energy_logs.deleteOne({ device_id: 10}); 


// For alerts 

use("smart_energy_nosql");

// Delete user_id: 11 
db.alerts.deleteOne({ user_id: 11 });