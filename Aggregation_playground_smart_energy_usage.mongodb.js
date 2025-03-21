// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


//           AGGREGATION



// The current database to use.
use("smart_energy_nosql");


// Calculate the all devices  energy consumption .

db.energy_logs.aggregate([
    {$group: {_id: null, total_consumption: {$sum:"$consumption_kwh"}}}
]) ;


// Calculate consumption average after 19 February 2025

use("smart_energy_nosql");

db.energy_logs.aggregate([
    {$match: { timestamp: {$gt: ISODate("2025-02-19T00:00:00Z") }}},
    {$group: {_id: null, average_consumption:{ $avg: "$consumption_kwh"} }}
]);


// Calculate total energy consumption of each device and  show all in order

use("smart_energy_nosql");

db.energy_logs.aggregate([
    {$group: {_id:"$device_id",total_consumption: {$sum: {$toDouble:"$consumption_kwh"}}}},
    {$sort: { total_consumption: -1 }}
]);



// Find the device that consumes most energy

use("smart_energy_nosql");

db.energy_logs.aggregate([
    {$group: {_id: "$device_id",total_consumption:{$sum:{$toDouble :"$consumption_kwh"}}}},
    {$sort:{total_consumption:-1 }},
    {$limit: 1}
]);




//         INDEXING


use("smart_energy_nosql");

// Add index to 'timestamp' field for to speed up date-based
db.energy_logs.createIndex({timestamp: 1});

// Add index to 'device_id' field for to speed up device-based
db.energy_logs.createIndex({device_id:1});

// Add index to 'user_id' field for to speed up user-based
db.energy_logs.createIndex({user_id: 1});