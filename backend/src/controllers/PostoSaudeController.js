const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const { nomePosto, email, whatsapp, logradouro, CEP} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('postosSaude').insert({
          id,
          nomePosto,
          email,
          whatsapp,
          logradouro,
          CEP   
        })
    
        return res.json({id});
    },

    async getAllPostos(req, res) {
        const postos = await connection('postosSaude').select('*');   
        return res.json(postos);  
    },

    async delete(req, res) {
        const { id } = req.params;
        const token = req.headers.token;
      
        const validationToken = await connection('postosSaude')
            .where('id', id)
            .select('id')
            .first();

        if(validationToken.id != token){
            return res.status(401).json({ error: 'Operação não autorizada'});
        }
        await connection('postosSaude').where('id', id).delete();

        return res.status(204).send();
    }
};