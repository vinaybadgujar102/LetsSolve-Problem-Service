const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        diffiulty: problemData.diffiulty ? problemData.diffiulty : "easy",
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find();
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemById(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(problemId, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(problemId, problemData, {
        new: true,
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const problem = await Problem.findByIdAndDelete(problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
