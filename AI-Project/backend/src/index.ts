import { Hono } from 'hono'
//import { json, urlencoded } from 'hono/body-parser'

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

// Middleware to parse JSON and URL-encoded bodies
//app.use('*', json(), urlencoded())

app.get('/', async (c) => {
  return c.json({ message: 'Hello, World!' })
})

// app.post('/upload', async (c) => {
//   // Assuming the image is sent as a form-data field named 'image'
//   //const imageFile = c.req.body.image

//   if (!imageFile) {
//     return c.json({ error: 'No image provided' }, 400)
//   }

//   // Convert imageFile to ArrayBuffer if necessary
//   const blob = await imageFile.arrayBuffer();
//   const input = {
//     image: [...new Uint8Array(blob)],
//     prompt: "Generate a caption for this image",
//     max_tokens: 512,
//   };

//   const response = await c.env.AI.run(
//     "@cf/llava-hf/llava-1.5-7b-hf",
//     input
//   );

//   return c.json(response)
// })

export default app
