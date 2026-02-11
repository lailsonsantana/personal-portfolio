// src/app/api/studylogs/route.ts
import { createStudyLog } from "@/service/studylog.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title, description, tags } = body;

    if (!title || !description || !Array.isArray(tags)) {
      return new Response("Payload inválido", { status: 400 });
    }

    const studyLog = await createStudyLog(
      title,
      description,
      tags
    );

    return Response.json(studyLog, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Erro interno", { status: 500 });
  }
}
