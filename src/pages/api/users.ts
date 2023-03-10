import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest) => {
  return NextResponse.json({
    ok: true,
    data: [
      {
        id: 1,
        name: "Hermez",
      },
      {
        id: 2,
        name: "BILL Y BEYBIS",
      },
    ],
  });
};