function pingProblemController(req, res) {
  return res.send("Pong problem controller");
}

function addProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

function getProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

function getProblems(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

function deleteProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

function updateProblem(req, res) {
  return res.status(501).json({ message: "Not implemented" });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
