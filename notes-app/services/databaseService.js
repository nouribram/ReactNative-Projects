/*import {database} from './appwrite';

const databaseService = {
    async ListDocuments(dbId, colId) {
        try{

            const response = await database.ListDocuments(dbId, colId);
            return response.documents || [];

        } catch (erorr) {

            console.error('Error fetching documents', error.message);

            return{error: error.message}

        }
        
    }
}

export default databaseService;*/