import {NextResponse} from "next/server";
import {comparePassword} from "../../../../../util/hashPassword";
import prisma from "../../../../../lib/prisma";
import {STATUS_ERROR, STATUS_OK, STATUS_UNAUTHORIZED} from "../../../../../lib/constant";

export async function POST(request) {
  try {
    const data = await request.json();
    const user = await prisma.m_users.findUnique({
      where: {
        username: data.username,
      },
      select: {
        user_id: true,
        password: true,
        role_id: true,
      }
    })

    // if not found
    if (!user) {
      return NextResponse.json({message: "Wrong credentials",}, {status: STATUS_UNAUTHORIZED})
    }

    // check password
    if (!comparePassword(data.password, user.password)) {
      return NextResponse.json({message: "Wrong credentials"}, {status: STATUS_UNAUTHORIZED})
    }

    return NextResponse.json({
      message: "Authorized",
      data: user
    }, {status: STATUS_OK})
  } catch (error) {
    return NextResponse.json({message: user}, {status: STATUS_ERROR})
  }
}