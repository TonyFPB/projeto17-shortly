import { Router } from "express";
import { postShortUrl } from "../Controllers/ShortUrls.controllers.js";
import { conflictUrlUser, validateAuthUrls, validateUrl } from "../Middlewares/ShortUrls.middlewares.js";

const shortUrlsRoutes = Router()

shortUrlsRoutes.post('/urls/shorten', validateAuthUrls,validateUrl,conflictUrlUser,postShortUrl)

shortUrlsRoutes.get('/urls/:id')
shortUrlsRoutes.get('/urls/open/:shortUrl')
shortUrlsRoutes.get('/users/me')

shortUrlsRoutes.delete('/urls/:id')

shortUrlsRoutes.get('/ranking')

export default shortUrlsRoutes