import {NextResponse} from "next/server";
import {STATUS_OK} from "../../../../../lib/constant";
import prisma from "../../../../../lib/prisma"

export async function GET(request, {params}) {
  try {
    const id = (await params).id
    const user = await prisma.m_users.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        username: true,
        first_name: true,
        last_name: true,
        role: true,
      }
    })
    return NextResponse.json({message: user}, {status: STATUS_OK})
  } catch (e) {
    return NextResponse.json({error: e})
  }
}