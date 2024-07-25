import { promises as fs } from "fs"
import path from "path"

export default async function extractAllFiles(relDirPath) {
    try {
        const currentWorkDir = process.cwd();

        // Construct the absolute path to the directory
        const dirPath = path.resolve(currentWorkDir, relDirPath);

        // Read all file names in the directory
        const fileNames = await fs.readdir(dirPath);

        // Create an array to store file contents
        const allFiles = [];

        // Iterate through each file name
        for (const fileName of fileNames) {
            // Construct the full path to the file
            const filePath = path.join(relDirPath, fileName);
            // Slice string as needed
            const index = filePath.indexOf("/");

            // Push the file contents to the array
            allFiles.push(filePath.substring(index));
        }

        // Return the array of file contents
        return allFiles;
    } catch (error) {
        // Handle any errors that occur during file reading
        console.error("Error reading files:", error);
        return [];
    }
}