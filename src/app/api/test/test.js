
export async function GET(req, { params }) {
    if (params?.id) {
      // GET specific item by ID
      const { id } = params;
      return new Response(JSON.stringify({ message: `Fetched item ${id}` }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // GET all items
      return new Response(JSON.stringify({ message: "Fetched all items" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
  export async function POST(req) {
    const data = await req.json();
    // Create a new item with the request data
    return new Response(
      JSON.stringify({ message: "Item created", data }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  
  export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json();
    // Update the item with the specified ID using request data
    return new Response(
      JSON.stringify({ message: `Item ${id} updated`, data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  
  export async function DELETE(req, { params }) {
    const { id } = params;
    // Delete the item with the specified ID
    return new Response(JSON.stringify({ message: `Item ${id} deleted` }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  