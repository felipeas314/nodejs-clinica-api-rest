const { Medico, medicoValidation } = require('../model/medico-model');

async function listaMedicos(req, res) {

    const { page, size } = req.params;

    const medicos = await Medico.find();
    res.status(200).json({ data: [medicos] });
}

async function adicionaMedico(req, res) {

    if (!(medicoValidation.isValid(req.body))) {
        return res.status(400).json({ error: 'Validação falhou' })
    }

    const medico = await Medico.create(req.body);

    return res.status(202).json({ data: [medico] });
}

async function buscaMedicoPorId(req, res) {

    const { id } = req.params;

    const medico = Medico.findById(id);

    if (!medico) {
        return res.status(404).json({ msg: 'Not found' });
    }

    res.status(200).json({ data: [medico] });
}

async function atualizaMedico(req, res) {
    res.json('ok');
}

async function removeMedico(req, res) {
    const { id } = req.params;

    const medico = Medico.findById(id);

    if (!medico) {
        return res.status(404).json({ msg: 'Not found' });
    }

    await Medico.deleteOne({ '_id': id });

    return res.status(200).json({ msg: 'Success' });
}

exports.listaMedicos = listaMedicos;
exports.adicionaMedico = adicionaMedico;
exports.removeMedico = removeMedico;
exports.buscaMedicoPorId = buscaMedicoPorId;
exports.atualizaMedico = atualizaMedico;