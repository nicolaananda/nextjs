export async function GET() {
  return Response.json({ message: "GET from Products API" });
}

export async function POST() {
  return Response.json({ message: "POST from Products API" });
}
