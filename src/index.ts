
export default {
	//env : It gives you access to environment variables, KV namespaces, Durable Objects, R2 buckets
	//ctx : It gives you access to the execution context of the worker, which includes information about the request and the environment
// 	Lets you do things outside the request-response cycle, like:
// Logging
// Running background tasks
// Waiting on async work after sending a response
	async fetch(request:Request, env:Env, ctx:ExecutionContext): Promise<Response> {
		// return new Response('Hello World!');
		//constructor URL used here to parse the request URL
		const url = new URL(request.url);
		if(request.method === 'GET'){
			if(url.pathname === '/'){
				return new Response('Hello World!');
			}
			else if(url.pathname === '/api/hello'){
				return new Response('Hello from API!');
			}
			else if(url.pathname === '/api/hello/adam'){
				return new Response('Hello Adam!');
			}
			else if(url.pathname === '/api/hello/jane'){
				return new Response('Hello Jane!');
			}
			else{
				return new Response('404 Not Found', { status: 404 });
			}
		} 
		// Handle non-GET methods with a 405 Method Not Allowed response
		return new Response('Method nto allowed', { status: 405 });
	},
} satisfies ExportedHandler<Env>;
// This ensures the object matches the expected Worker handler interface
// This is a simple Cloudflare Worker that responds to GET requests
