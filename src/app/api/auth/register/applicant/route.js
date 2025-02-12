import {NextResponse} from "next/server";
import prisma from "../../../../../../lib/prisma";
import {any, z} from "zod";
import {hashPassword} from "../../../../../../util/hashPassword";
import {STATUS_CREATED, STATUS_ERROR} from "../../../../../../lib/constant";

const registerApplicantSchema = z.object({
  fullname: z.string().min(1, "Name is required"),
  email: z.string().email("Email is required"),
  phone_number: z.string().min(1, "Phone Number is required"),
  field_of_work: z.string().min(1, "Field of work is required"),
  username: z.string().min(3, "Username less than 3"),
  password: z.string().min(3, "Password length must be at least 3 characters"),
  company_name: any()
})

export async function POST(request) {
  try {
    const data = await request.json();
    const parsedBody = registerApplicantSchema.parse(data);

    await prisma.$transaction(async (tx) => {
        const user = await tx.m_users.create({
          data: {
            username: parsedBody.username,
            email: parsedBody.email,
            password: hashPassword(parsedBody.password),
            phone_number: parsedBody.phone_number,
            role_id: 3
          }
        })

        if (!user.user_id) {
          throw new Error("User creation failed");
        }

        await tx.m_applicants.create({
          data: {
            user_id: user.user_id,
            fullname: parsedBody.fullname,
            field_of_work: parsedBody.field_of_work,
          }
        })
      }
    )
    return NextResponse.json(
      {message: "Applicant successfully created"}, {status: STATUS_CREATED}
    )
  } catch (error) {
    if (error === "User creation failed") {
      return NextResponse.json(
        {message: `User creation failed`}, {status: STATUS_ERROR}
      )
    }
    if (error.code === "P2002") {
      return NextResponse.json(
        {message: `${error.meta.target[0]} already Exist`}, {status: STATUS_ERROR}
      )
    }
    return NextResponse.json(
      {message: error.errors[0].message}, {status: STATUS_ERROR}
    )
  }
}