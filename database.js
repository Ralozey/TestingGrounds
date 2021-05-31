var pg = require('pg');

var client;

module.exports = {
	connect:function(){
		try
		{
			client = new pg.Client({
				connectionString: process.env.DATABASE_URL,
				ssl: {
					rejectUnauthorized: false
				}
			});
			client.connect();
		}
		catch(e)
		{
			console.log("Could not connect.");
			console.log(e);
		}
	},
	query: function(query, params, callback){
		console.log(query);
		
		if (client)
		{
			try
			{
				client.query(query,params, callback);
			}
			catch (e)
			{
				console.log("Could not connect.");
				console.log(e);
			}
		}
		else
		{
			console.log("Cannot query before connecting.");
		}
	}
};
