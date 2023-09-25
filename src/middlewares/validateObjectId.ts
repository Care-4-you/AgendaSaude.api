export default function validateObjectId(req, res, next) {
  if (!/^[0-9a-fA-F]{24}$/.test(req.params.id))
    return res.status(400).json({ error: "ID passado não se parace com um objectId!" });
  next();
}