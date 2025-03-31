import prisma from "../../../../../../lib/prisma";
import {NextResponse} from "next/server";
import {STATUS_OK} from "../../../../../../lib/constant";

export async function GET(request, {params}) {
  try {
    const id = (await params).id
    const user = await prisma.m_applicants.findFirst({
      where: {
        user_id: Number(id),
      },
    })

    return NextResponse.json({
      message: "success",
      data: {
        user
      }
    }, {status: STATUS_OK})
  } catch (e) {
    return NextResponse.json({error: e})
  }
}