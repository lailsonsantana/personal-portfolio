'use server'

import prisma from "@/lib/prisma";
import { StudyLogClass } from "./studylog.resource";


export const getAllStudyLogsAndCount = async () => {
    const response = await prisma.studyLog.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return response;
}

export const createStudyLog = async (
  title: string,
  description: string,
  tags: string[]
) => {
  return prisma.studyLog.create({
    data: {
      title,
      description,
      tags,
    },
  });
};

  

