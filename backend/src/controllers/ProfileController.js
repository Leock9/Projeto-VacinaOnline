const connection = require('../database/connection');

module.exports = {
    async getAll(req, res) {
        const token = req.headers.token;

        const vacinas = await connection('vacinas')
            .where('postoSaude_id', token)
            .select('*');

        return res.json(vacinas)
    }
}