import postDAO from "../DAO/postDAO";

function create(context) {
    async function query() {
        let res = postDAO.query();
        if (res) return res;
    }
    async function get(id) {
        let res = await postDAO.get(id);
        if (res) return res;
    }
    async function createNewOrUpdate(data) {
        let res = await postDAO.createNewOrUpdate(data);
        if(res) return res;
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
    };
}

export default {
    create: create
};

