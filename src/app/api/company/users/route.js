import prisma from "../../../../../lib/prisma";
import {NextResponse} from "next/server";
import {STATUS_OK} from "../../../../../lib/constant";

export async function POST(request) {
  try {
    const data = await request.json();
    const users = await prisma.m_recruiters.findMany({
      where: {
        company_id: Number(data.company_id),
      },
    })
    const count = users.length

    return NextResponse.json({
      message: "success",
      data: users,
      totalItems: count,
    }, {status: STATUS_OK})
  } catch (e) {
    return NextResponse.json({error: e})
  }
}