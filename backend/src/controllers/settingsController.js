export function getSettings(req, res) {
  res.json({
    token: req.headers['authorization']
  });
}