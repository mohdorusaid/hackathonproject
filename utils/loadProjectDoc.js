import fs from "fs";
import path from "path";

export function loadProjectDoc(projectName) {
  const projectPath = path.join(
    process.cwd(),
    "projects",
    projectName,
    "PROJECT.md"
  );

  if (!fs.existsSync(projectPath)) {
    throw new Error(`Project "${projectName}" not found`);
  }

  return fs.readFileSync(projectPath, "utf-8");
}
