import { result } from 'lodash';
import business from '../business/business.container';
const postEndpoint = (router) => {
	router.get('/api/posts', async (request, response, next) => {
    	try {
        	let result = await business.getPostManager().query();
        	response.status(200).send(result);
    	} catch (error) {
        	console.log(error);
    	}
	});
    router.post('/api/posts', async (request, response, next) =>{
        let result = await business.getPostManager.createNewOrUpdate();
        response.status(200).send(result)
    })
};
export default postEndpoint;