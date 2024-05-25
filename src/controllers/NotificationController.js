// import express from "express"
// import PessoaRepository from "../repository/PessoaRepository"
// const router = express.Router()

// router.post("/api/notification/:idPessoa", async (req, res) => {
//         const response = await PessoaRepository.findAlarmeByPessoaIdAndDate(req.params.idPessoa, req.body.horario, req.body.diaDaSemana);
//         if (response) {
//             console.log("Response found");
//             res.status(200).send(response);
//         }
//         const response2 = {
//             encontrado: "Não encontrado"
//         }
//         res.status(200).send(response2)
// })

// export default router