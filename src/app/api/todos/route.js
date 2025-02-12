import prisma from '../../../../lib/prisma';
import {NextResponse} from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany()
  return NextResponse.json(todos);
}

export async function POST(req, res) {
  const {title, description} = req.body;
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json({data: todo}, {status: 201});
}