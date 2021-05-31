var pg = require('pg');

var client;

module.exports = {
	connect:function(){
		var connectString = process.env.DATABASE_URL || "postgres://vbdnorqrpztaiq:546a9238ce6344facd220ffaf984e0caf87b959c2d2d09e16f55c4124a7fdf8d@ec2-54-83-53-8.compute-1.amazonaws.com:5432/db24oke0rni4ei?ssl=true";
		try
		{
			client = new pg.Client({
				connectionString: connectString,
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
