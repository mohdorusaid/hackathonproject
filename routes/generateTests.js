import express from "express";
import fs from "fs";
import path from "path";
import { loadProjectDoc } from "../utils/loadProjectDoc.js";
import { generateTestCases } from "../services/llamaAiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { projectName, jiraTicket } = req.body;

    if (!projectName || !jiraTicket) {
      return res.status(400).json({
        error: "projectName and jiraTicket are required"
      });
    }

    // Load project context
    const projectDoc = loadProjectDoc(projectName);

    // Load base system prompt
    const basePromptPath = path.join(
      process.cwd(),
      "prompts",
      "basePrompt.txt"
    );
    const basePrompt = fs.readFileSync(basePromptPath, "utf-8");

    // Compose final prompt
    const finalPrompt = `
${basePrompt}

====================
PROJECT CONTEXT
====================
${projectDoc}

====================
JIRA TICKET
====================
${jiraTicket}

====================
TASK
====================
Generate test cases according to the project context above.
    `;

    const testCases = await generateTestCases(finalPrompt);

    res.json({
      success: true,
      testCases
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message || "Failed to generate test cases"
    });
  }
});

export default router;
