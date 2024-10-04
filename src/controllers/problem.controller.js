const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");

const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());
function pingProblemController(req, res) {
  return res.send("Pong problem controller");
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem added successfully",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
