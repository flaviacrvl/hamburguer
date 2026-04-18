const Avaliacao = require('../models/avaliacao');

module.exports = {
    async store(req, res) {
        const { nota, comentario, pedido_id } = req.body;
        const avaliacao = await Avaliacao.create({ nota, comentario, pedido_id });
        return res.json(avaliacao);
    }
};