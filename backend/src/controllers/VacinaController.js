const connection = require('../database/connection');

module.exports = {
    async create (req, res) {
        const {nomeVacina, valor, idadeRecomendada, numeroDoses} = req.body;
        const postoSaude_id = req.headers.token;

        const [id] = await connection('vacinas').insert({
            nomeVacina,
            valor,
            idadeRecomendada,
            numeroDoses,
            postoSaude_id
        });
        return res.json({ id });
    },

    async getAll(req, res) {
        const { page = 1} = req.query

        const [vacinasTotais] = await connection('vacinas').count();

        const vacinas = await connection('vacinas')
        .join('postosSaude', 'postosSaude.id', '=', 'vacinas.postoSaude_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select
        ([
            'vacinas.*',
            'postosSaude.nomePosto',
            'postosSaude.email',
            'postosSaude.whatsapp',
            'postosSaude.logradouro',
            'postosSaude.CEP'
        ]);   

        res.header('Total-Vacinas', vacinasTotais['count(*)']);

        return res.json(vacinas);  
    },

    async delete(req, res) {
        const { id } = req.params;
        const token = req.headers.token;
      
        const validationToken = await connection('vacinas')
            .where('id', id)
            .select('postoSaude_id')
            .first();

        if(validationToken.postoSaude_id != token){
            return res.status(401).json({ error: 'Operação não autorizada'});
        }
        await connection('vacinas').where('id', id).delete();

        return res.status(204).send();
    }
};
