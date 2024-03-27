const validateParamUser = (req, res, next) => {
    const { user } = req.body;
    if (!user.email || !user.password || !user.rol || !user.lenguage) {
        return res.status(400).json({ error: "Debe llenar todos los campos" });
    }
    next();
}

export { validateParamUser };