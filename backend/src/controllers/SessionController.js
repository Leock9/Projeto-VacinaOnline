const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const { id } = req.body;
        
        const posto = await connection('postosSaude') 
            .where('id', id)
            .select('nomePosto')
            .first();

        if(!posto) {
            return res.status(400).json({ erro: 'Não existe posto cadastrado para esse id'})
        } 
           
        return res.json(posto)
    }
}