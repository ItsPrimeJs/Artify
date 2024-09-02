import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import * as fal from "@fal-ai/serverless-client";

dotenv.config();

fal.config({
  credentials: process.env.FAL_KEY // Ensure FAL_KEY is set in .env
});

const router = express.Router();

// Handle POST request
// router.post('/', async (req, res) => {
//   try {
//       const { prompt } = req.body;

//       const result = await fal.subscribe("fal-ai/flux/schnell", {
//           input: { prompt: prompt },
//           image_size: "square",
//           num_images: 1,
//           logs: true,
//           onQueueUpdate: (update) => {
//               if (update.status === "IN_PROGRESS") {
//                   update.logs.map((log) => log.message).forEach(console.log);
//               }
//           },
//       });

//       const imageUrl = result.data[0].url;
//       res.status(200).json({ photo: imageUrl });
//   } catch (error) {
//       console.error("Error occurred while generating image:", error.message);
//       res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('Received prompt:', prompt);

    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: { prompt: prompt },
      image_size: "square",
      num_images: 1,
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });

    console.log('API result:', result);
    const imageUrl = result.images[0].url;
    res.status(200).json({ photo: imageUrl });
  } catch (error) {
    console.error("Error occurred while generating image:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});



router.get('/', function(req, res) {
  res.send('Welcome to Artify API!');
});

export default router;
