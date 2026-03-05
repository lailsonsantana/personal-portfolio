'use server'

import prisma from "@/lib/prisma";
import { StudyLogClass } from "./studylog.resource";

import fs from "fs/promises";
import path from "path";



export const getAllStudyLogsAndCount = async (): Promise<StudyLogClass[]> => {
  const response = await prisma.studyLog.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return response;
}

/*export const createStudyLog = async (title: string, description: string, tags: string[]) => {
  return prisma.studyLog.create({
    data: { title, description, tags, },
  });
};*/

export const createStudyLog = async (title: string, description: string, tags: string[]) => {

  const log = await prisma.studyLog.create({
    data: { title, description, tags }
  });


  await rebuildStudyLogsCache();
  return log;
};


export const rebuildStudyLogsCache = async () => {

  const logs = await prisma.studyLog.findMany({
    orderBy: { createdAt: "desc" }
  });

  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "studylogs.json"
  );

  await fs.writeFile(
    filePath,
    JSON.stringify(logs, null, 2)
  );
};



