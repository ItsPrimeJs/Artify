import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import post from '../mongodb/models/post.js';
import router from './dalleRoutes.js';


export default router;