export async function POST(req: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    throw new Error("Google Script URL is missing.");
  }

  try {
    const formData = await req.formData();

    const res = await fetch(scriptUrl, {
      method: "POST",
      body: formData,
    });

    const text = await res.text();

    return Response.json({
      success: true,
      data: text,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: String(err),
    });
  }
}