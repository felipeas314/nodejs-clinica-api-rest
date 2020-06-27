const { Medico, MedicoValidation } = require('../model/medico-model');

async function listaMedicos(req, res) {

    const { page = 1, size = 10 } = req.params;

    const offset = (page - 1) * size;

    const medicos = await Medico.findAndCountAll(
        {
            offset,
            size
        }
    );

    res.status(200).json({
        content: medicos.rows,
        status: 'OK',
        quantity: medicos.count
    });
}

async function adicionaMedico(req, res) {

    if (!(MedicoValidation.isValid(req.body))) {
        return res.status(400).json({ error: 'Validação falhou' })
    }

    const medico = await Medico.create(req.body);

    return res.status(201).json({
        content: medico,
        status: 'CREATED'
    });
}

async function findDoctorById(req, res) {

    const { id } = req.params;

    const medico = await Medico.findOne({ where: { id } });

    if (!medico) {
        return res.status(404).json({ msg: 'Not found' });
    }

    res.status(200).json({
        data: medico,
        status: 'OK',
        date: new Date()
    });
}

async function atualizaMedico(req, res) {
    res.json('ok');
}

async function removeDoctor(req, res) {
    const { id } = req.params;

    const medico = Medico.destroy({ where: { id } });

    if (!medico) {
        return res.status(400).json({ msg: 'Not found' });
    }

    await Medico.remo

    return res.status(200).json({ 
        msg: 'Success', 
        date: new Date()
    });
}

exports.listaMedicos = listaMedicos;
exports.adicionaMedico = adicionaMedico;
exports.removeDoctor = removeDoctor;
exports.findDoctorById = findDoctorById;
exports.atualizaMedico = atualizaMedico;